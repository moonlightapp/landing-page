import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-team-mission',
    templateUrl: './team-mission.component.html',
    styleUrls: ['./team-mission.component.scss']
})
export class TeamMissionComponent implements OnInit {


    public profiles = {
        foundersAndCoreTeam: [
            { firstName: 'Besar', lastName: 'Ismaili,', role: 'Oversees the company’s overall vision, strategy, and operations.', avatar: 'assets/images/people/besar.jpg', link: 'https://www.linkedin.com/in/besar/', platform: 'linkedin', team: 'Founders & Core Team' },
            { firstName: 'Marius', lastName: 'Fagerhol,', role: 'Collaborates closely with design and product teams to deliver seamless, high-performance iOS experiences.', avatar: 'assets/images/people/marius.jpg', link: 'https://www.linkedin.com/in/marius-fagerhol-4076a4126/', platform: 'linkedin', team: 'Co-founder & iOS Lead' },
            { firstName: 'Bejtulla', lastName: 'Ajeti,', role: 'Specializes in crafting responsive, user-friendly web interfaces.', avatar: 'assets/images/people/profile.jpg', link: '', platform: 'linkedin', team: 'Front-End Developer' },
            { firstName: 'Taaha', lastName: 'Bin Khalid,', role: 'Focuses on the end-to-end user journey, improving service touchpoints and interaction patterns.', avatar: 'assets/images/taaha-bin-khaled-image.jpg', link: 'https://www.linkedin.com/in/taahabinkhalid/?originalSubdomain=no', platform: 'linkedin', team: 'Senior Interaction & Service Designer' },
            { firstName: 'Muhamed', lastName: 'Zeqiri,', role: 'Responsible for server-side logic, database management, and API integrations. ', avatar: 'assets/images/muhamed-zeqiri-image.jpeg', link: 'https://www.linkedin.com/in/muhamed-zeqiri-35a728241/', platform: 'linkedin', team: 'Back-End Developer,' },
            { firstName: 'Kujtim', lastName: 'Saliu,', role: 'Responsible for coding, testing, and optimizing iOS functionalities to meet high performance standards.', avatar: 'assets/images/kujtim-saliu-image.jpeg', link: 'https://www.linkedin.com/in/kujtim-saliu-b205b217a', platform: 'linkedin', team: 'iOS Engineer' },
            { firstName: 'Lot', lastName: 'Bajrami,', role: 'Ensures smooth feature implementation and system-wide efficiency.', avatar: 'assets/images/lot-bajrami-image.jpeg', link: 'https://www.linkedin.com/in/lot-bajrami-771226135', platform: 'linkedin', team: 'Senior Full-Stack Engineer' },
            { firstName: 'Valdrin', lastName: 'Muharemi,', role: 'Back-End Developer', avatar: 'assets/images/valdrin-muharemi-image.jpeg', link: 'https://www.linkedin.com/in/valdrin-muharemi', platform: 'linkedin', team: 'Founders & Core Team' }
        ],
        marketing: [
            { firstName: 'Just', lastName: 'Andreas,', role: 'Oversees marketing initiatives and his work includes creating compelling campaigns and supporting product launches to enhance market reach.', avatar: 'assets/images/just-andreas-image.png', link: 'https://www.instagram.com/justandreas/?hl=en', platform: 'instagram', team: 'Marketing Specialist' }
        ],
        investorsAndAdvisors: [
            { firstName: 'Endre', lastName: 'Brask Grønmyr,', role: 'Strong finance background and a history of leading successful companies in Norway, Endre provides strategic governance and financial oversight.', avatar: 'assets/images/endre-brask-gronmyr-image.jpeg', link: 'https://www.linkedin.com/in/endre-brask-gr%C3%B8nmyr/', platform: 'linkedin', team: 'Chairman of the Board' },
            { firstName: 'Marius', lastName: 'Mårnes Mathiesen,', role: 'Founder and CEO of Shortcut AS.', avatar: 'assets/images/marius-marnes-mathiesen-image.png', link: 'https://www.linkedin.com/in/mmathiesen/?originalSubdomain=no', platform: 'linkedin', team: 'Investor & Advisor' },
            { firstName: 'Arve', lastName: 'Egil Habjorg,', role: 'CFO at Unacast', avatar: 'assets/images/arve-egil-habjorg-image.jpeg', link: 'https://www.linkedin.com/in/arvehabjorg/', platform: 'linkedin', team: 'Investor & Advisor' },
            { firstName: 'Sigurd William', lastName: 'Rachlew Høystad,', role: 'Advisor and Investor', avatar: 'assets/images/sigurd-image.jpeg', link: 'https://no.linkedin.com/in/sigurdwrh', platform: 'linkedin', team: 'Investor & Advisor' },
            { firstName: 'Thomas', lastName: 'Pettersen,', role: 'CEO of Skråstrek.', avatar: 'assets/images/thomas-pettersen-image.jpeg', link: 'https://www.linkedin.com/in/thomas-pettersen-45322622/', platform: 'linkedin', team: 'Advisor & Early Investor' },
            { firstName: 'Elin', lastName: 'Fjeld,', role: 'Advisor, Product Tester and Shareholder', avatar: 'assets/images/elin-fjeld-image.jpeg', link: 'https://no.linkedin.com/in/elinfjeld/en', platform: 'linkedin', team: 'Investor & Advisor' }
        ]
    };

    public allMembers: any[] = [];
    public selectedMember: any;
    private touchTimeout: any;
    protected isMobile = false;

    constructor() {
    }

    ngOnInit(): void {
        this.allMembers = [
            ...this.profiles.foundersAndCoreTeam,
            ...this.profiles.marketing,
            ...this.profiles.investorsAndAdvisors
        ];

        // Default selected member
        this.selectedMember = this.allMembers[0];

        // Detect if the device is mobile
        this.isMobile = this.checkIfMobile();
    }

    // Check if the device is mobile
    checkIfMobile(): boolean {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    showMemberDetails(member: any): void {
        this.selectedMember = member;
    }

    openMemberLink(member: any): void {
        if (member.link) {
            window.open(member.link, '_blank');
        } else {
            alert('No link available for this member.');
        }
    }

    // Handle click events
    onClick(member: any): void {
        if (!this.isMobile) {
            // On desktop, click opens the link
            this.openMemberLink(member);
        } else {
            // On mobile, click selects the member
            this.showMemberDetails(member);
        }
    }

    // Handle touch events for mobile
    onTouchStart(member: any): void {
        if (this.isMobile) {
            this.touchTimeout = setTimeout(() => {
                this.openMemberLink(member);
            }, 1000); // 1 second long press
        }
    }

    onTouchEnd(member: any): void {
        if (this.isMobile) {
            clearTimeout(this.touchTimeout);
        }
    }
}

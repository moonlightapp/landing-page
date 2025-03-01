import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-team-mission',
    templateUrl: './team-mission.component.html',
    styleUrls: ['./team-mission.component.scss']
})
export class TeamMissionComponent implements OnInit {


    public profiles = {
        foundersAndCoreTeam: [
            { firstName: 'Besar', lastName: 'Ismaili,', role: 'Founder and Senior Developer', avatar: 'assets/images/people/besar.jpg', link: 'https://www.linkedin.com/in/besar/', platform: 'linkedin', team: 'Founders & Core Team' },
            { firstName: 'Marius', lastName: 'Fagerhol,', role: 'Co-Founder and iOS Lead', avatar: 'assets/images/people/marius.jpg', link: 'https://www.linkedin.com/in/marius-fagerhol-4076a4126/', platform: 'linkedin', team: 'Founders & Core Team' },
            { firstName: 'Bejtulla', lastName: 'Ajeti,', role: 'Front-End Developer', avatar: 'assets/images/people/profile.jpg', link: '', platform: 'linkedin', team: 'Founders & Core Team' },
            { firstName: 'Taaha', lastName: 'Bin Khalid,', role: 'Interaction and Service Designer', avatar: 'assets/images/taaha-bin-khaled-image.jpg', link: 'https://www.linkedin.com/in/taahabinkhalid/?originalSubdomain=no', platform: 'linkedin', team: 'Founders & Core Team' },
            { firstName: 'Muhamed', lastName: 'Zeqiri,', role: 'Back-end Developer', avatar: 'assets/images/muhamed-zeqiri-image.jpeg', link: 'https://www.linkedin.com/in/muhamed-zeqiri-35a728241/', platform: 'linkedin', team: 'Founders & Core Team' },
            { firstName: 'Kujtim', lastName: 'Saliu,', role: 'iOS Developer', avatar: 'assets/images/kujtim-saliu-image.jpeg', link: 'https://www.linkedin.com/in/kujtim-saliu-b205b217a', platform: 'linkedin', team: 'Founders & Core Team' },
            { firstName: 'Lot', lastName: 'Bajrami,', role: 'Full-Stack Developer', avatar: 'assets/images/lot-bajrami-image.jpeg', link: 'https://www.linkedin.com/in/lot-bajrami-771226135', platform: 'linkedin', team: 'Founders & Core Team' },
            { firstName: 'Valdrin', lastName: 'Muharemi,', role: 'Back-end Developer', avatar: 'assets/images/valdrin-muharemi-image.jpeg', link: 'https://www.linkedin.com/in/valdrin-muharemi', platform: 'linkedin', team: 'Founders & Core Team' }
        ],
        marketing: [
            { firstName: 'Just', lastName: 'Andreas,', role: 'Marketing', avatar: 'assets/images/just-andreas-image.png', link: 'https://www.instagram.com/justandreas/?hl=en', platform: 'instagram', team: 'Marketing' }
        ],
        investorsAndAdvisors: [
            { firstName: 'Endre', lastName: 'Brask Grønmyr,', role: 'Chairman of the Board', avatar: 'assets/images/endre-brask-gronmyr-image.jpeg', link: 'https://www.linkedin.com/in/endre-brask-gr%C3%B8nmyr/', platform: 'linkedin', team: 'Investors & Advisors' },
            { firstName: 'Marius', lastName: 'Mårnes Mathiesen,', role: 'Advisor and Investor', avatar: 'assets/images/marius-marnes-mathiesen-image.png', link: 'https://www.linkedin.com/in/mmathiesen/?originalSubdomain=no', platform: 'linkedin', team: 'Investors & Advisors' },
            { firstName: 'Arve', lastName: 'Egil Habjorg,', role: 'Advisor and Investor', avatar: 'assets/images/arve-egil-habjorg-image.jpeg', link: 'https://www.linkedin.com/in/arvehabjorg/', platform: 'linkedin', team: 'Investors & Advisors' },
            { firstName: 'Sigurd William', lastName: 'Rachlew Høystad,', role: 'Advisor and Investor', avatar: 'assets/images/sigurd-image.jpeg', link: 'https://no.linkedin.com/in/sigurdwrh', platform: 'linkedin', team: 'Investors & Advisors' },
            { firstName: 'Thomas', lastName: 'Pettersen,', role: 'Advisor and Early Investor', avatar: 'assets/images/thomas-pettersen-image.jpeg', link: 'https://www.linkedin.com/in/thomas-pettersen-45322622/', platform: 'linkedin', team: 'Investors & Advisors' },
            { firstName: 'Elin', lastName: 'Fjeld,', role: 'Advisor, Product Tester and Shareholder', avatar: 'assets/images/elin-fjeld-image.jpeg', link: 'https://no.linkedin.com/in/elinfjeld/en', platform: 'linkedin', team: 'Investors & Advisors' }
        ]
    };

    public allMembers: any[] = [];
    public selectedMember: any;

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

}

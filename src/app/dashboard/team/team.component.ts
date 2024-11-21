import { TEAM_INFO_CARD_ITEMS } from '../../constants/team-info-card-items';
import { TEAM_MESSAGES } from '../../constants/team.messaages';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
    public messages = JSON.parse(JSON.stringify(TEAM_MESSAGES));
    public profileMode: boolean = true;
    public teamInfoItems = TEAM_INFO_CARD_ITEMS;

    public profiles = {
        foundersAndCoreTeam: [
            {
                firstName: 'Besar',
                lastName: 'Ismaili',
                role: 'Founder and Senior Developer',
                avatar: 'assets/images/people/besar.jpg',
                link: 'https://linkedin.com/in/besar-ismaili',
                platform:'linkedin'
            },
            {
                firstName: 'Marius',
                lastName: 'Fargerhol',
                role: 'Co-Founder and iOS Lead',
                avatar: 'assets/images/people/marius.jpg',
                link: 'https://linkedin.com/in/marius-fargerhol',
                platform:'linkedin'
            },
            {
                firstName: 'Bejtulla',
                lastName: 'Ajeti',
                role: 'Front-End Developer',
                avatar: 'assets/images/people/profile.jpg',
                link: '',
                platform:'linkedin'
            },
            {
                firstName: 'Taaha',
                lastName: 'Bin Khaled',
                role: 'Interaction and Service Designer',
                avatar: 'assets/images/taaha-bin-khaled-image.jpg',
                link: 'https://linkedin.com/in/taaha-bin-khaled',
                platform:'linkedin'
            },
            {
                firstName: 'Muhamed',
                lastName: 'Zeqiri',
                role: 'Back-end Developer',
                avatar: 'assets/images/muhamed-zeqiri-image.jpeg',
                link: 'https://www.linkedin.com/in/muhamed-zeqiri-35a728241/',
                platform:'linkedin'
            },
            {
                firstName: 'Kujtim',
                lastName: 'Saliu',
                role: 'iOS Developer',
                avatar: 'assets/images/kujtim-saliu-image.jpeg',
                link: 'https://www.linkedin.com/in/kujtim-saliu-b205b217a',
                platform:'linkedin'
            },
            {
                firstName: 'Lot',
                lastName: 'Bajrami',
                role: 'Full-Stack Developer',
                avatar: 'assets/images/lot-bajrami-image.jpeg',
                link: 'https://www.linkedin.com/in/lot-bajrami-771226135',
                platform:'linkedin'
            },
            {
                firstName: 'Valdrin',
                lastName: 'Muharemi',
                role: 'Back-end Developer',
                avatar: 'assets/images/valdrin-muharemi-image.jpeg',
                link: 'https://www.linkedin.com/in/valdrin-muharemi',
                platform:'linkedin'
            }
        ],
        marketing: [
            {
                firstName: 'Just',
                lastName: 'Andreas',
                role: 'Marketing',
                avatar: 'assets/images/just-andreas-image.png',
                link: 'https://www.instagram.com/justandreas/?hl=en',
                platform:'instagram'
            }
        ],
        investorsAndAdvisors: [
            {
                firstName: 'Endre',
                lastName: 'Brask Grønmyr',
                role: 'Chairman of the Board',
                avatar: 'assets/images/endre-brask-gronmyr-image.jpeg',
                link: 'https://www.linkedin.com/in/endre-brask-gr%C3%B8nmyr/',
                platform:'linkedin'
            },
            {
                firstName: 'Marius',
                lastName: 'Mårnes Mathiesen',
                role: 'Advisor and Investor',
                avatar: 'assets/images/marius-marnes-mathiesen-image.png',
                link: 'https://www.linkedin.com/in/mmathiesen/?originalSubdomain=no',
                platform:'linkedin'
            },
            {
                firstName: 'Arve',
                lastName: 'Egil Habjorg',
                role: 'Advisor and Investor',
                avatar: 'assets/images/arve-egil-habjorg-image.jpeg',
                link: 'https://www.linkedin.com/in/arvehabjorg/',
                platform:'linkedin'
            },
            {
                firstName: 'Marius',
                lastName: 'Fargerhol',
                role: 'Advisor and Investor',
                avatar: 'assets/images/people/marius.jpg',
                link: 'https://linkedin.com/in/marius-fargerhol',
                platform:'linkedin'
            },
            {
                firstName: 'Thomas',
                lastName: 'Pettersen',
                role: 'Advisor and Early Investor',
                avatar: 'assets/images/thomas-pettersen-image.jpeg',
                link: 'https://www.linkedin.com/in/thomas-pettersen-45322622/',
                platform:'linkedin'
            },
            {
                firstName: 'Elin',
                lastName: 'Fjeld',
                role: 'Advisor and Investor',
                avatar: 'assets/images/elin-fjeld-image.jpeg',
                link: 'https://no.linkedin.com/in/elinfjeld/en',
                platform:'linkedin'
            }
        ]
    };
    

    constructor() {
    }

    ngOnInit() {
        console.log('++++++++++++++++++++++++++++', this.teamInfoItems)
    }

    getPlatformIcon(platform: string): string {
        const icons: { [key: string]: string } = {
            linkedin: 'linkedin-icon.svg',
            tiktok: 'tiktok-icon.svg',
            instagram: 'instagram-icon.svg'
        };
        return icons[platform] || ''; // Return empty if no valid platform
    }
    

}

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
                link: 'https://linkedin.com/in/besar-ismaili'
            },
            {
                firstName: 'Marius',
                lastName: 'Fargerhol',
                role: 'Co-Founder and iOS Lead',
                avatar: 'assets/images/people/marius.jpg',
                link: 'https://linkedin.com/in/marius-fargerhol'
            },
            {
                firstName: 'Bejtulla',
                lastName: 'Ajeti',
                role: 'Front-End Developer',
                avatar: 'assets/images/people/profile.jpg',
                link: 'https://linkedin.com/in/bejtullah-ismaili'
            },
            {
                firstName: 'Taaha',
                lastName: 'Bin Khaled',
                role: 'Interaction and Service Designer',
                avatar: '/assets/images/people/taaha.jpg',
                link: 'https://linkedin.com/in/taaha-bin-khaled'
            },
            {
                firstName: 'Muhamed',
                lastName: 'Zeqiri',
                role: 'Back-end Developer',
                avatar: '/assets/images/people/profile.jpg',
                link: 'https://linkedin.com/in/muhamed-zeqiri'
            },
            {
                firstName: 'Kujtim',
                lastName: 'Saliu',
                role: 'iOS Developer',
                avatar: '/assets/images/people/profile.jpg',
                link: 'https://linkedin.com/in/kujtim-saliu'
            },
            {
                firstName: 'Lot',
                lastName: 'Bajrami',
                role: 'Full-Stack Developer',
                avatar: '/assets/images/people/profile.jpg',
                link: 'https://linkedin.com/in/lot-bajrami'
            },
            {
                firstName: 'Valdrin',
                lastName: 'Muharemi',
                role: 'Back-end Developer',
                avatar: '/assets/images/people/valdrin.jpg',
                link: 'https://linkedin.com/in/valdrin-muharemi'
            }
        ],
        marketing: [
            {
                firstName: 'Andreas',
                lastName: '',
                role: 'Marketing',
                avatar: '/assets/images/people/profile.jpg',
                link: 'https://linkedin.com/in/just-andreas'
            }
        ],
        investorsAndAdvisors: [
            {
                firstName: 'Endre',
                lastName: 'Grønmyr',
                role: 'Chairman of the Board',
                avatar: '/assets/images/people/endre.jpg',
                link: 'https://linkedin.com/in/endre-grønmyr'
            },
            {
                firstName: 'Arve',
                lastName: 'Unknown',
                role: 'Advisor and Investor',
                avatar: '/assets/images/people/profile.jpg',
                link: 'https://linkedin.com/in/arve'
            },
            {
                firstName: 'Marius',
                lastName: 'Fargerhol',
                role: 'Advisor and Investor',
                avatar: '/assets/images/people/marius.jpg',
                link: 'https://linkedin.com/in/marius-fargerhol'
            },
            {
                firstName: 'Thomas',
                lastName: 'Pettersen',
                role: 'Advisor and Early Investor',
                avatar: '/assets/images/people/thomas.jpg',
                link: 'https://linkedin.com/in/thomas-pettersen'
            },
            {
                firstName: 'Sigurd',
                lastName: 'Unknown',
                role: 'Advisor and Investor',
                avatar: '/assets/images/people/profile.jpg',
                link: 'https://linkedin.com/in/sigurd'
            }
        ]
    };
    

    constructor() {
    }

    ngOnInit() {
        console.log('++++++++++++++++++++++++++++', this.teamInfoItems)
    }

}

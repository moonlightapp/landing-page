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

    public profiles = [
        {
            firstName: 'Besar',
            lastName: 'Ismaili',
            role: 'CEO',
            avatar: 'assets/images/people/besar.jpg'
        },
        {
            firstName: 'Marius',
            lastName: 'Fargerhol',
            role: 'iOS developer',
            avatar: 'assets/images/people/marius.jpg'
        },
        {
            firstName: 'Elin',
            lastName: 'Gundersen',
            role: 'Company & Product developer',
            avatar: '/assets/images/people/elin.jpg'
        },
        {
            firstName: 'Taaha',
            lastName: 'Bin Khaled',
            role: 'Interaction and Service designer',
            avatar: '/assets/images/people/taaha.jpg'
        },
        {
            firstName: 'Valdrin',
            lastName: 'Muharemi',
            role: 'Server-side',
            avatar: '/assets/images/people/valdrin.jpg'
        },
        {
            firstName: 'Thomas',
            lastName: 'Pettersen',
            role: 'Tech & Early investor',
            avatar: '/assets/images/people/thomas.jpg'
        },
        {
            firstName: 'Ardian',
            lastName: 'Saidi',
            role: 'Android developer',
            avatar: '/assets/images/people/profile.jpg'
        },
        {
            firstName: 'Endre',
            lastName: 'Grønmyr',
            role: 'Finance',
            avatar: '/assets/images/people/endre.jpg'
        },
        
        {
            firstName: 'Besim',
            lastName: 'Ismaili',
            role: 'Data Analytics',
            avatar: '/assets/images/people/besim.jpg'
        },
        {
            firstName: 'Fitim',
            lastName: 'Beqiri',
            role: 'Business & Early investor',
            avatar: '/assets/images/people/fitim.jpg'
        },
        {
            firstName: 'Sunil',
            lastName: 'Shivanand',
            role: 'Cloud Architect',
            avatar: '/assets/images/people/sunil.jpg'
        },
        {
            firstName: 'Veton',
            lastName: 'Neziri',
            role: 'Android developer',
            avatar: '/assets/images/people/profile.jpg'
        },
        {
            firstName: 'Perparim',
            lastName: 'Shala',
            role: 'Machine Learning',
            avatar: '/assets/images/people/perparim.jpg'
        },
        {
            firstName: 'Dona',
            lastName: 'Mulaku',
            role: 'UI/UX',
            avatar: '/assets/images/people/profile.jpg'
        },
        {
            firstName: 'David',
            lastName: 'Mkrtchyan',
            role: 'Front-end',
            avatar: '/assets/images/people/profile.jpg'
        },
        {
            firstName: 'You?',
            lastName: 'Contact us',
            role: 'What you do best',
            avatar: '/assets/images/people/profile.jpg'
        },
        
    ];

    constructor() {
    }

    ngOnInit() {
        console.log('++++++++++++++++++++++++++++', this.teamInfoItems)
    }

}

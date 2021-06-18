import { Component, OnInit } from '@angular/core';
import { TEAM_MESSAGES } from '../../constants/team.messaages';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
    public messages = JSON.parse(JSON.stringify(TEAM_MESSAGES));
    public profileMode: boolean = true;

    public profiles = [
        {
            firstName: 'Besar',
            lastName: 'Ismaili',
            role: 'Founder, Backend/iOS Developer',
            avatar: './assets/images/people/besar.jpg'
        },
        {
            firstName: 'Marius',
            lastName: 'Fagerhol',
            role: 'Co-Founder, iOS Developer',
            avatar: './assets/images/people/marius.jpg'
        },
        {
            firstName: 'Elin',
            lastName: 'Gundersen',
            role: 'Head of Content',
            avatar: './assets/images/people/elin.jpg'
        },
        {
            firstName: 'Ardian',
            lastName: 'Saidi',
            role: 'Android Developer',
            avatar: './assets/images/people/profile.jpg'
        },
        {
            firstName: 'Thomas',
            lastName: 'Pettersen',
            role: 'Technical Advisor, Investor',
            avatar: 'https://ca.slack-edge.com/TMG64LZ25-USUV0HMUN-e94bd2a19500-512'
        },
        {
            firstName: 'Dona',
            lastName: 'Mulaku',
            role: 'UI/UX Designer',
            avatar: './assets/images/people/profile.jpg'
        },
        {
            firstName: 'Endre',
            lastName: 'Gronmyr',
            role: 'Chairman',
            avatar: './assets/images/people/endre.jpg'
        },
        {
            firstName: 'Fitim',
            lastName: 'Beqiri',
            role: 'Business Developer',
            avatar: './assets/images/people/fitim.jpg'
        },
        {
            firstName: 'Valdrin',
            lastName: 'Muharemi',
            role: 'Backend Developer',
            avatar: 'https://ca.slack-edge.com/TMG64LZ25-U017YMEHVTL-c19a18f7e603-512'
        },
        {
            firstName: 'Perparim',
            lastName: 'Shala',
            role: 'Machine Learning Engineer',
            avatar: './assets/images/people/perparim.jpg'
        },
        {
            firstName: 'Sunil',
            lastName: 'Shivanand',
            role: 'Cloud Architect',
            avatar: 'https://ca.slack-edge.com/TMG64LZ25-U014ZNREQDR-g4dd3509a826-512'
        },
        {
            firstName: 'Veton',
            lastName: 'Neziri',
            role: 'Android Developer',
            avatar: './assets/images/people/profile.jpg'
        },
        {
            firstName: 'Besim',
            lastName: 'Ismaili',
            role: 'Data Scientist',
            avatar: './assets/images/people/besim.jpg'
        },
        {
            firstName: 'David',
            lastName: 'Mkrtchyan',
            role: 'Front-end Developer',
            avatar: './assets/images/people/profile.jpg'
        },
    ]

    constructor() {
    }

    ngOnInit() {
    }

}

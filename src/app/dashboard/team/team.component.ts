import { Component, OnInit } from '@angular/core';
import { TEAM_MESSAGES } from '../../constants/team.messaages';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
    public messages = JSON.parse(JSON.stringify(TEAM_MESSAGES));

    constructor() {
    }

    ngOnInit() {
    }

}

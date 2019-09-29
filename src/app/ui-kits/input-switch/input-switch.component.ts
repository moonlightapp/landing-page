import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-input-switch',
    templateUrl: './input-switch.component.html',
    styleUrls: ['./input-switch.component.scss']
})
export class InputSwitchComponent implements OnInit {

    public checked: boolean;
    public checked1: boolean = false;
    public checked2: boolean = true;

    constructor() {
    }

    ngOnInit() {
    }

}

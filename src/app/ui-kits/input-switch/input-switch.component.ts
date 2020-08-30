import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-input-switch',
    templateUrl: './input-switch.component.html',
    styleUrls: ['./input-switch.component.scss']
})
export class InputSwitchComponent implements OnInit {
    @Input() checkedText: string = 'Active';
    @Input() unCheckedText: string = 'Paused';
    @Input() label: string;
    @Input() showSwitchValue: boolean = true;
    @Input() checked: boolean;

    @Output() onChange = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    public change(): void {
        this.onChange.emit(this.checked);
    }
}

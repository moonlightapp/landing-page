import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-radio-button',
    templateUrl: './radio-button.component.html',
    styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {
    @Input() label: string;
    @Input() selectedValue: string | number;

    @Output() select = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    public onClick(): void {
        this.select.emit(this.selectedValue);
    }

}

import { InfoCardItem } from '../../interfaces/info-card-item';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-info-card',
    templateUrl: './info-card.component.html',
    styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {
    @Input() item: InfoCardItem;

    constructor() {
    }

    ngOnInit() {
    }

}

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public showMessageBox: boolean;
    public showModal: boolean;
    public showContactPageLink: boolean;

    constructor() {
    }

    ngOnInit() {
    }

    public openMessageBox() {
        this.showModal = !this.showModal;
        setTimeout(() => {
            this.showMessageBox = !this.showMessageBox;
        }, 300);
    }

    public showContactDetails() {
        this.showMessageBox = !this.showMessageBox;
        setTimeout(() => {
            this.showModal = !this.showModal;
            this.showContactPageLink = true;
        }, 300);
    }

}

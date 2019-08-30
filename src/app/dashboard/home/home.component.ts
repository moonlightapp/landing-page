import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public showMessageBox: boolean;
    public showScale: boolean;

    constructor() {
    }

    ngOnInit() {
    }

    public toggleModal() {
        this.showMessageBox = !this.showMessageBox;

        setTimeout(() => {
            this.showScale = this.showMessageBox
        }, 500)
    }

    public onLastMessage() {
        setTimeout(() => {
            this.showMessageBox = !this.showMessageBox;
        }, 1000)
        this.showScale = false;
    }
}

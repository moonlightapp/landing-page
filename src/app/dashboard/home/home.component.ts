import { HOME_MESSAGES } from '../../constants/home.messages';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public showMessageBox = true;
    public showScale: boolean;
    public showTapIcon = true;
    public showDownloadInfo: boolean;
    public showMessageBoxModal: boolean;
    public showDownloadInfoContent: boolean;
    public messages = JSON.parse(JSON.stringify(HOME_MESSAGES));

    constructor() {
    }

    ngOnInit() {

    }

    public toggleModal() {
        this.showMessageBox = !this.showMessageBox;
        this.messages = [...this.messages];

        setTimeout(() => {
            this.showScale = this.showMessageBox;
        }, 400);
    }

    public onLastMessage() {
        this.showMessageBox = false;
        this.showMessageBoxModal = false;

        setTimeout(() => {
            this.showTapIcon = true;
        }, 300);

        setTimeout(() => {
            // this.showMessageBox = !this.showMessageBox;
            this.showMessageBox = true;
        }, 150);

        setTimeout(() => {
            this.showDownloadInfoContent = !this.showDownloadInfoContent;
        }, 0);

        this.showDownloadInfo = false;
        this.showScale = false;
    }

    public navigateToHome(): void {
        setTimeout(() => {
            this.showDownloadInfo = false;
        }, 500);

        this.showDownloadInfoContent = !this.showDownloadInfoContent;
    }

    public openMessageBoxModal(): void {
        this.showMessageBoxModal = true;
        this.showMessageBox = false;
    }

    public navigateToWebStore(): void {
        window.open('https://testflight.apple.com/join/yb3jdbl6', '_blank');
    }
    public navigateToDocs(): void {
        window.open('https://docs.moonlightapp.co/d', '_blank');
    }

    public onFirstTimeClick(): void {
        this.showTapIcon = false;
    }
    public navigateToTestFlight(): void {
        window.open('https://testflight.apple.com/join/0DaLdUmA', '_blank');
    }
}

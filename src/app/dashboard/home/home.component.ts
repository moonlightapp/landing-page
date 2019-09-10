import { Component, OnInit } from '@angular/core';
import { HOME_MESSAGES } from '../../constants/home.messages';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public showMessageBox: boolean;
    public showScale: boolean;
    public showDownloadInfo: boolean;
    public showDownloadInfoContent: boolean;
    public messages = JSON.parse(JSON.stringify(HOME_MESSAGES));

    constructor() {
    }

    ngOnInit() {

    }

    public toggleModal() {
        this.showMessageBox = !this.showMessageBox;

        setTimeout(() => {
            this.showScale = this.showMessageBox
        }, 200)
    }

    public onLastMessage() {
        setTimeout(() => {
            this.showMessageBox = !this.showMessageBox;
        }, 650);

        setTimeout(() => {
            this.showDownloadInfoContent = !this.showDownloadInfoContent;
        }, 0);

        this.showDownloadInfo = true;
        this.showScale = false;
    }

    public navigateToHome():void {
        setTimeout(() => {
            this.showDownloadInfo = false;
        }, 500);

        this.showDownloadInfoContent = !this.showDownloadInfoContent;
    }
}

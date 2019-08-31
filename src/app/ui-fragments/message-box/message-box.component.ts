import { AfterContentInit, Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-message-box',
    templateUrl: './message-box.component.html',
    styleUrls: ['./message-box.component.scss']
})
export class MessageBoxComponent implements OnInit, AfterContentInit {
    @Output() lastMessage = new EventEmitter();
    @Input() modalIsVisible: boolean;
    @Input() isHomePage: boolean;
    @Input() messages: any[];
    private index = 1;

    public isInited = false;
    public hideMessageBox = false;


    @HostListener('document:keydown', ['$event'])
    onKeyDown(event) {
        if (event.keyCode === 40)
            this.displayMessagesByIndex();
    }

    @HostListener('document:click', ['$event'])
    onClick(event) {
        this.isInited && this.displayMessagesByIndex();
    }

    constructor() {
    }

    ngOnInit() {

    }

    ngAfterContentInit(): void {
        setTimeout(() => {
            this.messages[0].isVisible = true;
            this.isInited = true;
        }, 800)
    }

    displayMessagesByIndex(): any {
        let container = document.getElementById('message-box-container');
        let items = Array.from(document.getElementsByClassName('message-box-container')[0].querySelectorAll('.message-item'));

        if (this.index > this.messages.length - 1) {
            if (!this.isHomePage) {
                this.index = 1;
                container['style'].transform = `translate(-50%, ${-(90)}px)`;
                this.messages.forEach((message, index) => index ? (message.isVisible = false) : (message.isVisible = true));
                return;
            }

            this.messages.forEach(message => message.isVisible = false);
            this.hideMessageBox = true;
            this.lastMessage.emit(true);
        } else  {
            this.messages[this.index].isVisible = true;
            let el = document.getElementById(''+(this.index));
            container['style'].transform = `translate(-50%, ${-(el.offsetTop + 90)}px)`;
        }

        // setTimeout(() => {
        //     items.forEach((item, index) => {
        //         if (item.getBoundingClientRect().top < 120 && this.messages[index].isVisible) {
        //             this.messages[index].isVisible = false;
        //         }
        //     })
        // }, 300)

        this.index++;
    }
}

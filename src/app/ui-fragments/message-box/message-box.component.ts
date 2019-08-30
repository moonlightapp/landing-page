import { AfterContentInit, Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-message-box',
    templateUrl: './message-box.component.html',
    styleUrls: ['./message-box.component.scss']
})
export class MessageBoxComponent implements OnInit, AfterContentInit {
    @Output() lastMessage = new EventEmitter();
    @Input() modalIsVisible: boolean;
    private index = 1;

    public messages = [
        {
            title: 'David',
            content: 'first question form david',
            isQuestion: true,
            isVisible: false
        },
        {
            title: 'John',
            content: 'John answered davids first message',
            isQuestion: false,
            isVisible: false
        },
        {
            title: 'Daivd',
            content: 'second question form david',
            isQuestion: true,
            isVisible: false
        },
        {
            title: 'Tom',
            content: 'Tom answered davids second question',
            isQuestion: false,
            isVisible: false
        },
        {
            title: 'Michael',
            content: 'Michael answered Tom question',
            isQuestion: true,
            isVisible: false
        },
        {
            title: 'Jordan',
            content: 'Jordan answered davids second question',
            isQuestion: false,
            isVisible: false
        },
        {
            title: 'David',
            content: 'Tom answered davids second question',
            isQuestion: true,
            isVisible: false
        },
        {
            title: 'David',
            content: 'Tom answered davids last question 321 654 897',
            isQuestion: false,
            isVisible: false
        },
    ];
    public isInited = false


    @HostListener('document:keydown', ['$event'])
    onKeyDown(event) {
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
        }, 300)
    }

    displayMessagesByIndex(): any {
        if (this.index > this.messages.length - 1) {
            this.messages.forEach(message => message.isVisible = false);
            this.lastMessage.emit(true);
        } else  {
            this.messages[this.index].isVisible = true;
            let container = document.getElementById('message-box-container');
            let el = document.getElementById(''+(this.index));
            container['style'].transform = `translate(-50%, ${-(el.offsetTop + 150)}px)`;
        }
        this.index++;
    }
}

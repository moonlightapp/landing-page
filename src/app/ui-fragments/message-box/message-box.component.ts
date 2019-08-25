import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-message-box',
    templateUrl: './message-box.component.html',
    styleUrls: ['./message-box.component.scss']
})
export class MessageBoxComponent implements OnInit {
    @Output() lastMessage = new EventEmitter();
    private index = 0;

    public messagesData = [
        {
            title: 'John',
            content: 'John answered davids message',
            isQuestion: false
        },
        {
            title: 'Daivd',
            content: 'second question form david',
            isQuestion: true
        },
        {
            title: 'Tom',
            content: 'Tom answered davids second question',
            isQuestion: false
        },
        {
            title: 'Michael',
            content: 'Michael answered Tom question',
            isQuestion: true
        },
        {
            title: 'Jordan',
            content: 'Jordan answered davids second question',
            isQuestion: false
        },
        {
            title: 'David',
            content: 'Tom answered davids second question',
            isQuestion: true
        },
        {
            title: 'David',
            content: 'Tom answered davids second question 321 654 897',
            isQuestion: false
        },
    ];

    public messages = [
        {
            title: 'David',
            content: 'first question form david',
            isQuestion: true
        },
    ];

    @HostListener('window:keydown', ['$event'])
    onClick($event) {
        if ($event.keyCode === 40) {
            this.addMessagesOnKeydown();
        }
    }

    constructor() {
    }

    ngOnInit() {
    }

    addMessagesOnKeydown(): void {
        if (this.index <= this.messagesData.length - 1)
            this.messages.push(this.messagesData[this.index++]);

        if (this.index === this.messagesData.length) {
            this.lastMessage.emit(true);
        }
    }

}

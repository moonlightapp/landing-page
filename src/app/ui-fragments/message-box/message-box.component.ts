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
            title: 'David',
            content: 'first question form david',
            isQuestion: true
        },
        {
            title: 'John',
            content: 'John answered davids first message',
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
            content: 'Tom answered davids last question 321 654 897',
            isQuestion: false
        },
    ];

    public messages = [];

    @HostListener('document:keydown', ['$event'])
    onKeyDown($event) {
        $event.keyCode === 40 && this.addMessagesOnKeydown();
    }

    // @HostListener('document:click', ['$event'])
    // onClick(event) {
    //     event.stopPropagation();
    //     event.preventDefault()
    //     this.addMessagesOnKeydown();
    // }

    constructor() {
    }

    ngOnInit() {
        this.initFirstMessage();
    }

    initFirstMessage() {
        setTimeout(() => {
            this.messages.push(this.messagesData.shift());
        }, 1500)
    }

    addMessagesOnKeydown(): any {
        if (this.index < this.messagesData.length) {
            return this.messages.push(this.messagesData[this.index++]);
        }

        this.lastMessage.emit(true);
        this.messages = [];
    }
}

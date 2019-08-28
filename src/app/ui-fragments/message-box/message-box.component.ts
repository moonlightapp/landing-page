import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-message-box',
    templateUrl: './message-box.component.html',
    styleUrls: ['./message-box.component.scss']
})
export class MessageBoxComponent implements OnInit {
    @Output() lastMessage = new EventEmitter();
    private index = 0;

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


    @HostListener('document:keydown', ['$event'])
    onKeyDown($event) {
        this.messages[this.index++].isVisible = true;
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

    }

}

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
    private index = 1;

    public messages = [
        {
            title: 'David',
            content: 'first question form david',
            avatar: 'https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png',
            isQuestion: true,
            isVisible: false
        },
        {
            title: 'John',
            content: 'John answered davids first message',
            avatar: 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png',
            isQuestion: false,
            isVisible: false
        },
        {
            title: 'Daivd',
            content: 'second question form david',
            avatar: 'https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366_960_720.png',
            isQuestion: true,
            isVisible: false
        },
        {
            title: 'Tom',
            content: 'Tom answered davids second question',
            avatar: 'https://avatarfiles.alphacoders.com/115/115265.png',
            isQuestion: false,
            isVisible: false
        },
        {
            title: 'Michael',
            content: 'Michael answered Tom question',
            avatar: 'https://t4.ftcdn.net/jpg/01/05/72/55/240_F_105725550_LsQIhnhtWkmUfJ7XMyFWAjTxtmsdlICx.jpg',
            isQuestion: true,
            isVisible: false
        },
        {
            title: 'Jordan',
            content: 'Jordan answered davids second question',
            avatar: 'https://t4.ftcdn.net/jpg/01/05/72/55/240_F_105725589_JZfWRosnHjBUXOoYCVXTVQsKwf2CU3gd.jpg',
            isQuestion: false,
            isVisible: false
        },
        {
            title: 'David',
            content: 'Tom answered davids second question',
            avatar: 'https://image.freepik.com/free-vector/woman-girl-female-cartoon-avatar-icon_25030-13347.jpg',
            isQuestion: true,
            isVisible: false
        },
        {
            title: 'David',
            content: 'Tom answered davids last question 321 654 897',
            avatar: 'https://previews.123rf.com/images/jemastock/jemastock1701/jemastock170100846/68927192-portrait-man-bearded-green-eyes-brown-hair-vector-illustration-eps-10.jpg',
            isQuestion: false,
            isVisible: false
        },
    ];
    public isInited = false;
    public hideMessageBox = false;


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
        }, 800)
    }

    displayMessagesByIndex(): any {
        let container = document.getElementById('message-box-container');

        if (this.index > this.messages.length - 1) {
            if (!this.isHomePage) {
                container['style'].transform = `translate(-50%, ${-(90)}px)`;
                this.index = 1;
                return;
            }

            this.messages.forEach(message => message.isVisible = false);
            this.hideMessageBox = true;
            this.lastMessage.emit(true);
        } else  {
            this.messages[this.index].isVisible = true;
            let el = document.getElementById(''+(this.index));
            container['style'].transform = `translate(-50%, ${-(el.offsetTop + 150)}px)`;
        }
        this.index++;
    }
}

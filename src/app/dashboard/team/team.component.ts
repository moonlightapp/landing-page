import { Component, OnInit } from '@angular/core';
import { TEAM_MESSAGES } from '../../constants/team.messaages';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
    public messages = JSON.parse(JSON.stringify(TEAM_MESSAGES));
    public profileMode: boolean = true;

    public profiles = [
        {
            firstName: 'Emma',
            lastName: 'Addison',
            role: 'Super Admin',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5NTBNBrHAvaW_hEYgujDAUqbLQ1j0R22ANw&usqp=CAU'
        },
        {
            firstName: 'Olivia',
            lastName: 'Addisyn',
            role: 'CTO',
            avatar: 'https://static.jobscan.co/blog/uploads/linkedin-profile-picture.jpg'
        },
        {
            firstName: 'Ava',
            lastName: 'Addy',
            role: 'Marketing Manager',
            avatar: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg'
        },
        {
            firstName: 'Isabella',
            lastName: 'Kimberley',
            role: 'UI/UX Designer',
            avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
        },
        {
            firstName: 'Sophia',
            lastName: 'Blakely',
            role: 'Manager',
            avatar: 'https://uploads.disquscdn.com/images/dc368ebd907dfb3c40406ed0c842b10023f20651969cbd4bf77e524b3bf29ce7.jpg'
        },
        {
            firstName: 'Charlotte',
            lastName: 'Laverne',
            role: 'Manager',
            avatar: 'https://a9p9n2x2.stackpathcdn.com/wp-content/blogs.dir/1/files/2017/01/iStock-459373353-339x480.jpg'
        },
        {
            firstName: 'Amelia',
            lastName: 'Leighton',
            role: 'Marketing Team Lead',
            avatar: 'https://st2.depositphotos.com/1715570/6423/i/950/depositphotos_64239109-stock-photo-young-black-woman-looking-up.jpg'
        },
        {
            firstName: 'Harper',
            lastName: 'Mackenzie',
            role: 'UI/UX Design Team Lead',
            avatar: 'https://16asb.itocd.net/www/images/girl/1208601-1208800/e928451f-4246-4e72-898a-829531f7dcd6.jpg'
        },
    ]

    constructor() {
    }

    ngOnInit() {
    }

}

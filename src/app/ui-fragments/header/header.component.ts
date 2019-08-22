import { Component, OnInit } from '@angular/core';
import { NavigationItem } from '../../interfaces/navigation-item';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public navBarItems: NavigationItem[] = [
        {
            url: '/home',
            title: 'Home'
        },
        {
            url: '/team',
            title: 'Team'
        },
        {
            url: '/contact',
            title: 'Contact'
        },
        {
            url: '/settings',
            title: 'Settings'
        }

    ];
    constructor() {
    }

    ngOnInit() {
    }

}

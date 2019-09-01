import { Component, Input, OnInit } from '@angular/core';
import { NavigationItem } from '../../interfaces/navigation-item';

@Component({
    selector: 'app-nav-bar-menu',
    templateUrl: './nav-bar-menu.component.html',
    styleUrls: ['./nav-bar-menu.component.scss']
})
export class NavBarMenuComponent implements OnInit {
    @Input() items: NavigationItem[] = [];
    public openMenu: boolean;

    constructor() {
    }

    ngOnInit() {
    }

    public toggleMenu(): void {
        this.openMenu = !this.openMenu;
    }

}

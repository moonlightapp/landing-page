import { NavigationItem } from '../../interfaces/navigation-item';
import { NAV_BAR_URLS } from '../../constants/nav-bar-urls';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public navBarItems: NavigationItem[] = NAV_BAR_URLS;

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    navigateToHomePage() {
        this.router.navigateByUrl('/home');
    }

}

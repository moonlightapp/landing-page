import { NavigationItem } from '../../interfaces/navigation-item';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nav-bar-menu',
    templateUrl: './nav-bar-menu.component.html',
    styleUrls: ['./nav-bar-menu.component.scss']
})
export class NavBarMenuComponent implements OnInit {
    @Input() items: NavigationItem[] = [];
    public openMenu: boolean;

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    public toggleMenu(event): void {
        event.stopPropagation();
        this.openMenu = !this.openMenu;
    }

    public navigate(url: string, index: number): void {
        index ? this.router.navigate([url]) : window.open('https://docs.moonlightapp.co/d', '_blank');
    }

    public navigateToWebStore(): void {
        window.open('https://apps.apple.com/no/app/moonlight-create-read-share/id1510126988', '_blank');
    }
    public navigateToDocs(): void {
        window.open('https://docs.moonlightapp.co/d', '_blank');
    }
    public navigateToTestFlight(): void {
        window.open('https://testflight.apple.com/join/0DaLdUmA', '_blank');
    }

}

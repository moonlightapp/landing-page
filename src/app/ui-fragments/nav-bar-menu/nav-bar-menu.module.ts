import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarMenuComponent } from './nav-bar-menu.component';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        NavBarMenuComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        NavBarMenuComponent
    ]
})
export class NavBarMenuModule {
}

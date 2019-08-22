import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NavBarMenuModule } from '../nav-bar-menu/nav-bar-menu.module';


@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        NavBarMenuModule
    ],
    exports: [
        HeaderComponent
    ]
})
export class HeaderModule {
}

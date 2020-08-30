import { UserProfileComponent } from './user-profile.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@NgModule({
    declarations: [
        UserProfileComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        UserProfileComponent
    ]
})
export class UserProfileModule {
}

import { MessageItemComponent } from './message-item.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@NgModule({
    declarations: [
        MessageItemComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        MessageItemComponent
    ]
})
export class MessageItemModule {
}

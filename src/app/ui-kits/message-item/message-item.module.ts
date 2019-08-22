import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageItemComponent } from './message-item.component';


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

import { MessageItemModule } from '../../ui-kits/message-item/message-item.module';
import { MessageBoxComponent } from './message-box.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@NgModule({
    declarations: [
        MessageBoxComponent
    ],
    imports: [
        CommonModule,
        MessageItemModule
    ],
    exports: [
        MessageBoxComponent
    ]
})
export class MessageBoxModule {
}

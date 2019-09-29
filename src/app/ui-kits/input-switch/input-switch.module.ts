import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSwitchComponent } from './input-switch.component';
import { InputSwitchModule as PrimeNgInputSwitch } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        InputSwitchComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        PrimeNgInputSwitch
    ],
    exports: [
        InputSwitchComponent
    ]
})
export class InputSwitchModule {
}

import { RadioButtonComponent } from './radio-button.component';
import { RadioButtonModule as RadioButtonModulePrime } from 'primeng/radiobutton'
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        RadioButtonComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RadioButtonModulePrime
    ],
    exports: [
        RadioButtonComponent
    ]
})
export class RadioButtonModule {
}

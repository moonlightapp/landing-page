import { CalendarModule as NgPrimeCalendarModule } from 'primeng/calendar';
import { CalendarComponent } from './calendar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        CalendarComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        NgPrimeCalendarModule,
    ],
    exports: [
        CalendarComponent,
    ]
})
export class CalendarModule {
}

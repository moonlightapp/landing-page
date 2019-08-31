import { SuccessModalModule } from '../ui-kits/success-modal/success-modal.module';
import { MessageBoxModule } from '../ui-fragments/message-box/message-box.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderModule } from '../ui-fragments/header/header.module';
import { SettingsComponent } from './settings/settings.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@NgModule({
    declarations: [
        HomeComponent,
        TeamComponent,
        ContactComponent,
        SettingsComponent,
        DashboardComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        HeaderModule,
        MessageBoxModule,
        ReactiveFormsModule,
        SuccessModalModule
    ],
})
export class DashboardModule {
}

import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SettingsComponent } from './settings/settings.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
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
        DashboardRoutingModule
    ],
})
export class DashboardModule {
}

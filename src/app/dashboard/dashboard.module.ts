import { UserProfileModule } from '../ui-fragments/user-profile/user-profile.module';
import { SuccessModalModule } from '../ui-kits/success-modal/success-modal.module';
import { MessageBoxModule } from '../ui-fragments/message-box/message-box.module';
import { InputSwitchModule } from '../ui-kits/input-switch/input-switch.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderModule } from '../ui-fragments/header/header.module';
import { FeedbackService } from '../services/feedback.service';
import { ContactComponent } from './contact/contact.component';
import { BetaService } from '../services/beta.service';
import { BetaComponent } from './beta/beta.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast'
import { NgModule } from '@angular/core';


@NgModule({
    declarations: [
        HomeComponent,
        TeamComponent,
        ContactComponent,
        BetaComponent,
        DashboardComponent,
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        HeaderModule,
        ToastModule,
        MessageBoxModule,
        ReactiveFormsModule,
        SuccessModalModule,
        UserProfileModule,
        InputSwitchModule
    ],
    providers: [
        MessageService,
        FeedbackService,
        BetaService,
    ]
})
export class DashboardModule {
}

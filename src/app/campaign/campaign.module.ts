import { NewCampaignComponent } from './new-campaign/new-campaign.component';
import { HeaderModule } from '../ui-fragments/header/header.module';
import { CampaignComponent } from './campaign/campaign.component';
import { CampaignRoutingModule } from './campaign-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdSetsComponent } from './ad-sets/ad-sets.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CalendarModule } from '../ui-kits/calendar/calendar.module';
import { InputSwitchModule } from '../ui-kits/input-switch/input-switch.module';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';


@NgModule({
    declarations: [
        NewCampaignComponent,
        AdSetsComponent,
        CampaignComponent
    ],
    imports: [
        FormsModule,
        HeaderModule,
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        CampaignRoutingModule,
        CalendarModule,
        TooltipModule,
        DropdownModule,
        RadioButtonModule,
        InputSwitchModule,
        CheckboxModule
    ]
})
export class CampaignModule {
}

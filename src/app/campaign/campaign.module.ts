import { NewCampaignComponent } from './new-campaign/new-campaign.component';
import { CampaignComponent } from './campaign/campaign.component';
import { CampaignRoutingModule } from './campaign-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdSetsComponent } from './ad-sets/ad-sets.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


@NgModule({
    declarations: [
        NewCampaignComponent,
        AdSetsComponent,
        CampaignComponent
    ],
    imports: [
        FormsModule,
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        CampaignRoutingModule
    ]
})
export class CampaignModule {
}

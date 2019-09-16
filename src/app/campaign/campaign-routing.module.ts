import { NewCampaignComponent } from './new-campaign/new-campaign.component';
import { CampaignComponent } from './campaign/campaign.component';
import { AdSetsComponent } from './ad-sets/ad-sets.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
    {
        path: '',
        component: CampaignComponent,
        children: [
            {
                path: '',
                redirectTo: 'new',
                pathMatch: 'full'
            },
            {
                path: 'new',
                component: NewCampaignComponent
            },
            {
                path: 'ad-sets',
                component: AdSetsComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CampaignRoutingModule {
}

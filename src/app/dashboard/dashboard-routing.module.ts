import { DashboardComponent } from './dashboard/dashboard.component';
import { BetaComponent } from './beta/beta.component';
import { ContactComponent } from './contact/contact.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { NgModule } from '@angular/core';


const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'team',
                component: TeamComponent,
            },
            {
                path: 'contact',
                component: ContactComponent
            },
            {
                path: 'beta',
                component: BetaComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class DashboardRoutingModule {
}

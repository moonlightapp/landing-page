import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-new-campaign',
    templateUrl: './new-campaign.component.html',
    styleUrls: ['./new-campaign.component.scss']
})
export class NewCampaignComponent implements OnInit {
    public cities = [
        {label:'Select City', value:null},
        {label: 'Oslo', value: {id: 1, name: 'Oslo', code: 'NY'}},
        {label: 'Stockholm', value: {id: 2, name: 'Stockholm', code: 'NY'}},
        {label: 'Copenhagen', value: {id: 3, name: 'Copenhagen', code: 'NY'}},
        {label: 'Bergen', value: {id: 4, name: 'Bergen', code: 'NY'}},
        {label: 'Stavanger', value: {id: 5, name: 'Stavanger', code: 'NY'}},
        {label: 'Trondheim', value: {id: 6, name: 'Trondheim', code: 'NY'}},
        {label: 'Drammen', value: {id: 7, name: 'Drammen', code: 'NY'}},
        {label: 'Fredrikstad', value: {id: 8, name: 'Fredrikstad', code: 'NY'}},
        {label: 'Skien', value: {id: 9, name: 'Skien', code: 'NY'}},
        {label: 'Kristiansand', value: {id: 10, name: 'Kristiansand', code: 'NY'}},
        {label: 'Ålesund', value: {id: 11, name: 'Ålesund', code: 'NY'}},
        {label: 'Tønsberg', value: {id: 12, name: 'Tønsberg', code: 'NY'}},
        {label: 'Moss', value: {id: 13, name: 'Moss', code: 'NY'}},
        {label: 'Gjøvik', value: {id: 14, name: 'Gjøvik', code: 'NY'}},
        {label: 'Lillehammer', value: {id: 15, name: 'Lillehammer', code: 'NY'}},
        {label: 'Gothenburg', value: {id: 16, name: 'Gothenburg', code: 'NY'}},
        {label: 'Malmö', value: {id: 17, name: 'Malmö', code: 'NY'}},
        {label: 'Uppsala', value: {id: 18, name: 'Uppsala', code: 'NY'}},
        {label: 'Upplands', value: {id: 19, name: 'Upplands', code: 'NY'}},
        {label: 'Västerås', value: {id: 20, name: 'Västerås', code: 'NY'}},
        {label: 'Örebro', value: {id: 21, name: 'Örebro', code: 'NY'}},
        {label: 'Linköping', value: {id: 22, name: 'Linköping', code: 'NY'}},
        {label: 'Helsingborg', value: {id: 23, name: 'Helsingborg', code: 'NY'}},
        {label: 'Aarhus', value: {id: 24, name: 'Aarhus', code: 'NY'}},
        {label: 'Odense', value: {id: 25, name: 'Odense', code: 'NY'}},
        {label: 'Aalborg', value: {id: 26, name: 'Aalborg', code: 'NY'}},
        {label: 'Esbjerg', value: {id: 27, name: 'Esbjerg', code: 'NY'}},
        {label: 'Randers', value: {id: 28, name: 'Randers', code: 'NY'}},
        {label: 'Kolding', value: {id: 29, name: 'Kolding', code: 'NY'}},
        {label: 'Horsens', value: {id: 30, name: 'Horsens', code: 'NY'}},
        {label: 'Vejle', value: {id: 31, name: 'Vejle', code: 'NY'}}
    ];

    public firstSection = [
        {id: 1, name: 'Awareness', tooltipText: 'Awareness'}
    ];

    public secondSection = [
        {id: 1, name: 'App Installs', tooltipText: 'App Installs'},
        {id: 2, name: 'Drive traffic to Website', tooltipText: 'Drive traffic to Website'},
        {id: 3, name: 'Drive traffic to app', tooltipText: 'Drive traffic to app'},
        {id: 4, name: 'Engagement', tooltipText: 'Engagement'},
        {id: 5, name: 'Video Views', tooltipText: 'Video Views'},
        {id: 6, name: 'Lead Gen', tooltipText: 'Lead Gen'},
    ];

    public thirdSection = [
        {id: 1, name: 'Website conversations', tooltipText: 'Website conversations'},
        {id: 2, name: 'Catalog Sales', tooltipText: 'Catalog Sales'},
    ];

    public selectedCity1: any;
    public selectedObjective: any;

    constructor() {
    }

    ngOnInit() {
    }

    public selectObjective(objective): void {
        this.selectedObjective = this.selectedObjective === objective ? null: objective;
    }
}

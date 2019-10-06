import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-ad-sets',
    templateUrl: './ad-sets.component.html',
    styleUrls: ['./ad-sets.component.scss']
})
export class AdSetsComponent implements OnInit {

    public cities = [
        {label: 'Attachment Type', value: null},
        {label: 'Longform Video', value: {id: 1, name: 'Longform Video', code: 'NY'}},
        {label: 'Website', value: {id: 2, name: 'Website', code: 'RM'}},
        {label: 'App Install', value: {id: 3, name: 'App Install', code: 'LDN'}},
        {label: 'Deep Link', value: {id: 4, name: 'Deep Link', code: 'IST'}},
        {label: 'Ar Lens', value: {id: 5, name: 'Ar Lens', code: 'PRS'}}
    ];

    public ages = [
        {label: 'Select Age', value: null},
        {label: '1', value: {id: 1, name: '1'}},
        {label: '2', value: {id: 2, name: '2'}},
        {label: '3', value: {id: 3, name: '3'}},
        {label: '4', value: {id: 4, name: '4'}},
        {label: '5', value: {id: 5, name: '5'}},
        {label: '6', value: {id: 6, name: '6'}},
        {label: '7', value: {id: 7, name: '7'}},
        {label: '8', value: {id: 8, name: '8'}},
        {label: '9', value: {id: 9, name: '9'}},
        {label: '10', value: {id: 10, name: '10'}},
    ];

    public demographicsOptions = [
        {id: 1, name: 'All'},
        {id: 2, name: 'Male'},
        {id: 3, name: 'Female'},
    ];
    public selectedDemographicsOption: any;

    public deviceTypes = [
        {id: 1, name: 'All'},
        {id: 2, name: 'Android'},
        {id: 3, name: 'IOS'},
    ];
    public selectedDeviceType: any;

    public connectionTypes = [
        {id: 1, name: 'All'},
        {id: 2, name: 'Cell'},
        {id: 3, name: 'WIFI'},
    ];
    public selectedConnectionType: any;

    public selectedAddSetIndex: number;

    public selectedCity1: any;
    public checkBoxValue1 = 'val1';
    public checkBoxValue2 = null;
    public selectedValues: string[] = [];
    public showRadioSubMenu: boolean;

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    public getRadioValue(value): void {
        this.showRadioSubMenu = value === 'val2';
    }

    public selectAddSet(index): void {
        this.selectedAddSetIndex = this.selectedAddSetIndex === index ? null: index;
    }

    public selectDemographicsOption(option): void {
        this.selectedDemographicsOption = this.selectedDemographicsOption === option ? null: option;
    }

    public selectDeviceType(deviceType): void {
        this.selectedDeviceType = this.selectedDeviceType === deviceType ? null: deviceType;
    }

    public selectConnectionType(connectionType): void {
        this.selectedConnectionType = this.selectedConnectionType === connectionType ? null: connectionType;
    }

    public publish(): void {

    }

    public previews(): void {
        this.router.navigateByUrl('campaign/new')
    }

}

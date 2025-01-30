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

public locations = [
    {label: 'All', value: {id: 0, name: 'All', code: 'ALL'}},
    {label: 'United States', value: {id: 1, name: 'United States', code: 'US'}},
    {label: 'Canada', value: {id: 2, name: 'Canada', code: 'CA'}},
    {label: 'United Kingdom', value: {id: 3, name: 'United Kingdom', code: 'GB'}},
    {label: 'Australia', value: {id: 4, name: 'Australia', code: 'AU'}},
    {label: 'India', value: {id: 5, name: 'India', code: 'IN'}},
    {label: 'Germany', value: {id: 6, name: 'Germany', code: 'DE'}},
    {label: 'France', value: {id: 7, name: 'France', code: 'FR'}},
    {label: 'Brazil', value: {id: 8, name: 'Brazil', code: 'BR'}},
    {label: 'Japan', value: {id: 9, name: 'Japan', code: 'JP'}},
    {label: 'South Korea', value: {id: 10, name: 'South Korea', code: 'KR'}},
    {label: 'Mexico', value: {id: 11, name: 'Mexico', code: 'MX'}},
    {label: 'China', value: {id: 12, name: 'China', code: 'CN'}},
    {label: 'Italy', value: {id: 13, name: 'Italy', code: 'IT'}},
    {label: 'Russia', value: {id: 14, name: 'Russia', code: 'RU'}},
    {label: 'Spain', value: {id: 15, name: 'Spain', code: 'ES'}},
    {label: 'South Africa', value: {id: 16, name: 'South Africa', code: 'ZA'}},
    {label: 'Argentina', value: {id: 17, name: 'Argentina', code: 'AR'}},
    {label: 'Egypt', value: {id: 18, name: 'Egypt', code: 'EG'}},
    {label: 'Saudi Arabia', value: {id: 19, name: 'Saudi Arabia', code: 'SA'}},
    {label: 'United Arab Emirates', value: {id: 20, name: 'United Arab Emirates', code: 'AE'}},
    {label: 'Turkey', value: {id: 21, name: 'Turkey', code: 'TR'}},
    {label: 'Pakistan', value: {id: 22, name: 'Pakistan', code: 'PK'}},
    {label: 'Nigeria', value: {id: 23, name: 'Nigeria', code: 'NG'}},
    {label: 'Indonesia', value: {id: 24, name: 'Indonesia', code: 'ID'}},
    {label: 'Vietnam', value: {id: 25, name: 'Vietnam', code: 'VN'}},
    {label: 'Thailand', value: {id: 26, name: 'Thailand', code: 'TH'}},
    {label: 'Colombia', value: {id: 27, name: 'Colombia', code: 'CO'}},
    {label: 'Chile', value: {id: 28, name: 'Chile', code: 'CL'}},
    {label: 'Poland', value: {id: 29, name: 'Poland', code: 'PL'}},
    {label: 'Ukraine', value: {id: 30, name: 'Ukraine', code: 'UA'}},
    {label: 'Norway', value: {id: 31, name: 'Norway', code: 'NO'}},
    {label: 'Sweden', value: {id: 32, name: 'Sweden', code: 'SE'}},
    {label: 'Denmark', value: {id: 33, name: 'Denmark', code: 'DK'}},
    {label: 'Finland', value: {id: 34, name: 'Finland', code: 'FI'}},
    {label: 'Netherlands', value: {id: 35, name: 'Netherlands', code: 'NL'}},
    {label: 'Belgium', value: {id: 36, name: 'Belgium', code: 'BE'}},
    {label: 'Switzerland', value: {id: 37, name: 'Switzerland', code: 'CH'}},
    {label: 'Austria', value: {id: 38, name: 'Austria', code: 'AT'}},
    {label: 'Greece', value: {id: 39, name: 'Greece', code: 'GR'}},
    {label: 'Portugal', value: {id: 40, name: 'Portugal', code: 'PT'}},
    {label: 'Poland', value: {id: 41, name: 'Poland', code: 'PL'}},
    {label: 'Romania', value: {id: 42, name: 'Romania', code: 'RO'}},
    {label: 'Czech Republic', value: {id: 43, name: 'Czech Republic', code: 'CZ'}},
    {label: 'Ireland', value: {id: 44, name: 'Ireland', code: 'IE'}},
    {label: 'Israel', value: {id: 45, name: 'Israel', code: 'IL'}},
    {label: 'Singapore', value: {id: 46, name: 'Singapore', code: 'SG'}},
    {label: 'Malaysia', value: {id: 47, name: 'Malaysia', code: 'MY'}},
    {label: 'Philippines', value: {id: 48, name: 'Philippines', code: 'PH'}},
    {label: 'Thailand', value: {id: 49, name: 'Thailand', code: 'TH'}},
    {label: 'New Zealand', value: {id: 50, name: 'New Zealand', code: 'NZ'}}
];

    public languages = [
        {label: 'English', value: {id: 1, name: 'ENGLISH', code: 'EN'}},
        {label: 'Spanish', value: {id: 2, name: 'SPANISH', code: 'ES'}},
        {label: 'French', value: {id: 3, name: 'FRENCH', code: 'FR'}},
        {label: 'German', value: {id: 4, name: 'GERMAN', code: 'DE'}},
        {label: 'Italian', value: {id: 5, name: 'ITALIAN', code: 'IT'}},
        {label: 'Portuguese', value: {id: 6, name: 'PORTUGUESE', code: 'PT'}},
        {label: 'Chinese', value: {id: 7, name: 'CHINESE', code: 'ZH'}},
        {label: 'Japanese', value: {id: 8, name: 'JAPANESE', code: 'JA'}},
        {label: 'Russian', value: {id: 9, name: 'RUSSIAN', code: 'RU'}},
        {label: 'Hindi', value: {id: 10, name: 'HINDI', code: 'HI'}},
        {label: 'Arabic', value: {id: 11, name: 'ARABIC', code: 'AR'}},
        {label: 'Korean', value: {id: 12, name: 'KOREAN', code: 'KO'}},
        {label: 'Dutch', value: {id: 13, name: 'DUTCH', code: 'NL'}},
        {label: 'Turkish', value: {id: 14, name: 'TURKISH', code: 'TR'}},
        {label: 'Swedish', value: {id: 15, name: 'SWEDISH', code: 'SV'}}
    ];
    public audiences = [
        {label: 'Children', value:{id: 1, name: 'CHILDREN'}},
        {label: 'Pre-teens', value:{id: 1, name: 'PRE-TEENS'}},
        {label: 'Teens', value:{id: 1, name: 'TEENS'}},
        {label: 'Adults', value:{id: 1, name: 'ADULTS'}},

    ];
    public ages = [
        {label: 'Select Age', value: null},
        {label: '0+', value: {id: 1, name: '0+'}},
        {label: '3+', value: {id: 2, name: '3+'}},
        {label: '7+', value: {id: 3, name: '7+'}},
        {label: '12+', value: {id: 4, name: '12+'}},
        {label: '16+', value: {id: 5, name: '16+'}},
        {label: '18+', value: {id: 6, name: '18+'}},
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
    public selectedCity2: any;
    public selectedAge:any;
    public selectedAudience:any;
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

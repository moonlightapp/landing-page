import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-new-campaign',
    templateUrl: './new-campaign.component.html',
    styleUrls: ['./new-campaign.component.scss']
})
export class NewCampaignComponent implements OnInit {
    public items = [
        {
            title: 'Awareness',
            items: [
                {
                    name: 'asd',
                    description: 'asd zxc qwe asd qwe zxc ',
                    logo: '',
                    info: ''
                }
            ]
        },
        {
            title: 'Consideration',
            items: [
                {
                    name: 'zxc',
                    description: 'zxc zxc asd asd ',
                    logo: '',
                    info: ''
                },
                {
                    name: 'zxc_1',
                    description: '000000000000000',
                    logo: '',
                    info: ''
                },
                {
                    name: 'zxc_2',
                    description: '000000000000000',
                    logo: '',
                    info: ''
                },
                {
                    name: 'zxc_3',
                    description: '1111111111111111',
                    logo: '',
                    info: ''
                },
                {
                    name: 'zxc_4',
                    description: '88888888888888888',
                    logo: '',
                    info: ''
                },
            ]
        },
        {
            title: 'Conversions',
            items: [
                {
                    name: 'asd qwe zxc ',
                    description: '55555555555555555555555',
                    logo: '',
                    info: ''
                },
                {
                    name: 'qwerty qwerty',
                    description: 'eiroutyieurtyiurtyierutyierouy',
                    logo: '',
                    info: ''
                }
            ]
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

}

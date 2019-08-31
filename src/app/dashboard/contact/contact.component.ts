import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    public form: FormGroup;

    constructor() {
    }

    ngOnInit() {
        this.initForm();
    }

    private initForm(): void {
        this.form = new FormGroup({
            first_name: new FormControl(null),
            last_name: new FormControl(null),
            subject: new FormControl(null),
        })
    }

    public submitForm(): void {

        console.log(this.form.value);
    }
}

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FeedbackService } from '../../services/feedback.service';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-invest-in-us',
    templateUrl: './invest-in-us.component.html',
    styleUrls: ['./invest-in-us.component.scss']
})
export class InvestInUsComponent implements OnInit {
    public form: FormGroup;
    public showLoader: boolean;
    private feedbackSub: Subscription;

    constructor(private feedBackService: FeedbackService) {
    }

    ngOnInit() {
        this.initForm();
    }

    private initForm(): void {
        this.form = new FormGroup({
            email: new FormControl(null, Validators.required),
            name: new FormControl(null, Validators.required),
            phone: new FormControl(null, Validators.required),
        });
    }

    public submit(): void {
        this.showLoader = true;
        this.feedbackSub = this.feedBackService.sendFeedBack(this.form.value)
            .pipe(
                finalize(() => this.showLoader = false)
            )
            .subscribe(res => {
                this.form.reset();
            });
    }

}

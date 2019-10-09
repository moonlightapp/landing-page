import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FeedbackService } from '../../services/feedback.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
    public form: FormGroup;
    public showLoader: boolean;
    private feedbackSub: Subscription;

    constructor(
        private feedBackService: FeedbackService,
        private messageService: MessageService
    ) {}

    ngOnInit() {
        this.initForm();
    }

    private initForm(): void {
        this.form = new FormGroup({
            email: new FormControl(null, Validators.required),
            subject: new FormControl(null, Validators.required),
            message: new FormControl(null, Validators.required),
        })
    }

    public submitForm(): void {
        this.showLoader = true;
        this.feedbackSub = this.feedBackService.sendFeedBack(this.form.value)
            .pipe(
                finalize(() => this.showLoader = false)
            )
            .subscribe(res => {
                this.form.reset();
                this.addSingle();
            })
    }

    addSingle() {
        this.messageService.add({
            severity:'success',
            summary:'Success',
            detail:'Your Feedback Submitted Successfully. '
        })
    }

    ngOnDestroy(): void {
        this.feedbackSub && this.feedbackSub.unsubscribe();
    }
}

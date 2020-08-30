import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FeedbackService } from '../../services/feedback.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BetaService } from '../../services/beta.service';
import { finalize, takeUntil } from 'rxjs/operators';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-settings',
    templateUrl: './beta.component.html',
    styleUrls: ['./beta.component.scss']
})
export class BetaComponent implements OnInit, OnDestroy {

    public form: FormGroup;
    public showLoader: boolean;
    private destroy$ = new Subject();

    constructor(
        private betaService: BetaService,
        private feedBackService: FeedbackService,
        private messageService: MessageService
    ) {
    }

    ngOnInit() {
        this.initForm();
    }

    private initForm(): void {
        this.form = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
        })
    }

    public submitForm(): void {
        if (this.form.invalid) return;

        this.showLoader = true;

        this.betaService.send(this.form.value.email)
            .pipe(
                takeUntil(this.destroy$),
                finalize(() => this.showLoader = false)
            )
            .subscribe(res => {
                this.form.reset();
                this.showSuccessMessage();
            })
    }

    private showSuccessMessage(): void {
        this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Your Feedback Submitted Successfully. '
        })
    }

    public getSelectedDevice(event): void {
        console.log('00000000000000000000000', event)
    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

}

import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    private deviceType: boolean;
    private destroy$ = new Subject();
    private successMessage: string = 'Successfully submitted, you’ll receive beta invite soon.!';

    constructor(
        private betaService: BetaService,
        private messageService: MessageService
    ) {
    }

    ngOnInit() {
        this.initForm();
    }

    private initForm(): void {
        this.form = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
            subject: new FormControl(null),
            message: new FormControl(null),
        })
    }

    public submitForm(): void {
        if (this.form.invalid || this.deviceType === undefined) return;

        this.showLoader = true;
        this.form.get('subject').patchValue(this.deviceType ? 'Android' : 'IOS');
        this.form.get('message').patchValue(this.form.value.email);

        this.betaService.send(this.form.value)
            .pipe(
                takeUntil(this.destroy$),
                finalize(() => this.showLoader = false)
            )
            .subscribe(_ => {
                this.form.reset();
                this.showSuccessMessage();
            })
    }

    private showSuccessMessage(): void {
        this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: this.successMessage
        })
    }

    public getSelectedDevice(event): void {
        this.deviceType = event === 1;
    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class FeedbackService {

    constructor(private http: HttpClient) {

    }

    public sendFeedBack(formValue): Observable<any> {
        return this.http.post('https://formspree.io/mbnkornm', formValue);
    }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class BetaService {

    constructor(private httpClient: HttpClient) {
    }

    public send(email: string): Observable<any> {
        return this.httpClient.post('', { email });
    }
}

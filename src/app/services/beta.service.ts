import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class BetaService {

    constructor(private httpClient: HttpClient) {
    }

    public send(data: {email: string, subject: string, message: string}): Observable<any> {
        return this.httpClient.post('https://formspree.io/mbnkornm', data);
        // return this.httpClient.post('http://ec2-52-30-111-90.eu-west-1.compute.amazonaws.com:8080/users/beta', data);
    }
}

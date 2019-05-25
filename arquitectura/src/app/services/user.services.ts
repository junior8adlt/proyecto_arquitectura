import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

declare var require: any;

@Injectable()
export class UserServices {
    constructor(private http: Http) {
    }

    login(user) {
        const body = `email=${user.email}&password=${user.password}`;
        const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

        return this.http.post('https://reqres.in/api/login', body, {headers})
                        .pipe(map(res => res.json()));
    }

}

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
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

        return this.http.post('https://reqres.in/api/login', body, { headers })
            .pipe(map(res => res.json()));
    }
    get8users(number) {
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.get('https://reqres.in/api/users?page=' + number, { headers })
            .pipe(map(res => res.json()));

    }

    getuser(id) {
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.get('https://reqres.in/api/users/' + id, { headers })
            .pipe(map(res => res.json()));
    }
    get8Resources(number) {
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.get('https://reqres.in/api/unknown?page=' + number, { headers })
            .pipe(map(res => res.json()));

    }
    create(user) {
        const body = `name=${user.name}&job=${user.job}`;
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

        return this.http.post('https://reqres.in/api/users', body, { headers })
            .pipe(map(res => res.json()));
    }

    update(user) {
        const body = `name=${user.name}&job=${user.job}`;
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

        return this.http.put('https://reqres.in/api/users/' + user.id, body, { headers })
            .pipe(map(res => res.json()));
    }
}

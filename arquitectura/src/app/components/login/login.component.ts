import { Component, OnInit } from '@angular/core';
import { UserServices } from '../../services/user.services';
import { Router } from '@angular/router';

declare var JQuery: any;
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    UserServices]
})
export class LoginComponent implements OnInit {
 public user: any = {
   email: '', password: ''
 };
  constructor(public userService: UserServices, private router: Router) { }

  ngOnInit() {
  }

login() {
  this.userService.login(this.user).subscribe(
    response => {
     if (response.token !== undefined  && response.token !== null && response.token !== '') {
       $('.animacion').removeClass('d-none');
       $('.login').addClass('d-none');
       setTimeout(() => {
        this.router.navigate(['/home']);
      }
      , 5000);
     } else {
     }
    },
    error => {
    console.log(error);
    }
);
}
}

import { Component, OnInit } from '@angular/core';
import { UserServices } from '../../services/user.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [
    UserServices]
})
export class UsuariosComponent implements OnInit {
public array: any [] = [];
  constructor(public userService: UserServices, private router: Router) { }

  ngOnInit() {
for (let i = 0; i < 3; i++) {
this.userService.get8users(i).subscribe(
    response => {
for (let i2 = 0; i2 < response.data.length; i2++) {
 this.array.push(response.data[i2]);
}
    },
    error => {
    console.log(error);
    }
);
}
this.array.pop();
console.log(this.array);
  }

  details(id) {
   localStorage.setItem('id', id);
   this.router.navigate(['usuarios/detalles']);

  }
}

import { Component, OnInit } from '@angular/core';
import { UserServices } from '../../../services/user.services';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css'],
  providers: [
    UserServices]
})
export class DetallesComponent implements OnInit {
public id: any;
public user: any;
public array: any [] = [];

  constructor(public userService: UserServices) { }

  ngOnInit() {
   this.id = localStorage.getItem('id');
    this.userService.getuser(this.id).subscribe(
    response => {
      this.user = response;
      
    },
    error => {
    console.log(error);
    }
    );

    for (let i = 0; i < 3; i++) {
      this.userService.get8Resources(i).subscribe(
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
  }

}

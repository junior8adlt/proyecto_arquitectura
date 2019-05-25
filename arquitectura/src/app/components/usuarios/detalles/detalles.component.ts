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
  constructor(public userService: UserServices) { }

  ngOnInit() {
   this.id = localStorage.getItem('id');
    this.userService.getuser(this.id).subscribe(
    response => {
      console.log(response);
      
    },
    error => {
    console.log(error);
    }
    );
  }

}

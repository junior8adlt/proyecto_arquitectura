import { Component, OnInit } from '@angular/core';
import { UserServices } from '../../../services/user.services';

@Component({
  selector: 'app-create-edit-usuario',
  templateUrl: './create-edit-usuario.component.html',
  styleUrls: ['./create-edit-usuario.component.css'],
  providers: [
    UserServices]
})
export class CreateEditUsuarioComponent implements OnInit {
  public id: any;
  public user: any;

  constructor(public userService: UserServices) { }

  ngOnInit() {
    this.id = localStorage.getItem('id');
    this.userService.getuser(this.id).subscribe(
    response => {
      this.user = response;
      console.log(this.user);
      const modi: any = {
        name: this.user.data.first_name = localStorage.getItem('first') + localStorage.getItem('last'), job: ''
      };
    },
    error => {
    console.log(error);
    }
    );
  }

}

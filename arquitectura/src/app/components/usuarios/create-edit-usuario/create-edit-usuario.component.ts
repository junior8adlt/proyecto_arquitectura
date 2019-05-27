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
  public user: any [] = [];
  public modi: any = {
    name: '', job: ''
  };
  public isEdit: boolean = false;
  public titulo: any = 'Crear Usuario';
  constructor(public userService: UserServices) { }

  ngOnInit() {
    const local = localStorage.getItem('usuarios');
    if (local !== undefined && local !== null) {
      this.user = JSON.parse(local);
    }
  }
create() {
  if (this.isEdit) {
    const modi2 = {
  name: this.modi.name, job: this.modi.job, id: this.id
    };
    this.userService.update(modi2).subscribe(
      response => {
      for (const key of this.user) {
        if (key.id === modi2.id) {
        key.name = modi2.name;
        key.job = modi2.job;
        this.user[key] = key;
        break;
        }
      }
      localStorage.setItem('usuarios', JSON.stringify(this.user));
      this.isEdit = false;
      this.titulo = 'Crear Usuario';
      this.id = '';
      this.modi.name = '';
      this.modi.job = '';
      },
      error => {
      console.log(error);
      }
      );
  } else {
  this.userService.create(this.modi).subscribe(
    response => {
      this.user.push(response);
      localStorage.setItem('usuarios', JSON.stringify(this.user));
    },
    error => {
    console.log(error);
    }
    );
  }
}

edit(user){
  this.titulo = 'Editar Usuario';
  this.modi.name = user.name;
  this.modi.job = user.job;
  this.isEdit = true;
  this.id = user.id;
}
}

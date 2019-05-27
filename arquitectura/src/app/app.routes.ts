import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DetallesComponent } from './components/usuarios/detalles/detalles.component';
import { CreateEditUsuarioComponent } from './components/usuarios/create-edit-usuario/create-edit-usuario.component';

const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'usuarios/detalles', component: DetallesComponent },
    { path: 'usuarios/create-edit', component: CreateEditUsuarioComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }

];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

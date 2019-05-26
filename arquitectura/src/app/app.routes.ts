import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { DetallesComponent } from './components/usuarios/detalles/detalles.component';
import { CreateEditUsuarioComponent } from './components/usuarios/create-edit-usuario/create-edit-usuario.component';

const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'navbar', component: NavbarComponent },
    { path: 'portafolio', component: PortafolioComponent },
    { path: 'proyectos', component: ProyectosComponent },
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'usuarios/detalles', component: DetallesComponent },
    { path: 'usuarios/editar', component: CreateEditUsuarioComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }

];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

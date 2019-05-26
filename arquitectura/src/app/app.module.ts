import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';


/* Rutas */

import { APP_ROUTING } from './app.routes';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { DetallesComponent } from './components/usuarios/detalles/detalles.component';
import { CreateEditUsuarioComponent } from './components/usuarios/create-edit-usuario/create-edit-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    PortafolioComponent,
    ProyectosComponent,
    UsuariosComponent,
    DetallesComponent,
    CreateEditUsuarioComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    NgxPageScrollCoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

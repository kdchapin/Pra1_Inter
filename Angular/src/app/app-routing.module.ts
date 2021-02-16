import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Componentes
import {LoginPageComponent} from './login-page/login-page.component'
import {RegistroComponent} from './registro/registro.component'
import {CrudPageComponent} from './crud-page/crud-page.component'
const routes: Routes = [
  {path: '', component:LoginPageComponent},
  {path: 'registro', component:RegistroComponent},
  {path: 'CRUD', component:CrudPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { RegistroComponent } from './registro/registro.component';
import { CrudPageComponent } from './crud-page/crud-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    TopnavbarComponent,
    RegistroComponent,
    CrudPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

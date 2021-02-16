import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router) { }

  errorLogueo :boolean;
  ngOnInit() {
  }

  login(){
    var correo = (<HTMLInputElement>document.getElementById("inputEmail")).value;
    var pass = (<HTMLInputElement>document.getElementById("inputPassword")).value;
    //let acceso: Login = { correo: correo, contrasena: pass };
    
    //this.serviciobd.iniciarSesion(acceso);
    
    //this.serviciobd.acceder(acceso);
   
  }

  validarDatos(){
  
  }

  cambiarError(){
    this.errorLogueo=false;
  }
}

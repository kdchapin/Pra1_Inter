import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  registrarse(){
    var nombre = (<HTMLInputElement>document.getElementById("inputNombre")).value;
    var correo = (<HTMLInputElement>document.getElementById("inputEmail")).value;
    var contra = (<HTMLInputElement>document.getElementById("inputContra")).value;
  }

}

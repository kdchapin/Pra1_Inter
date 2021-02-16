import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../Modelos/Usuario';

@Component({
  selector: 'app-crud-page',
  templateUrl: './crud-page.component.html',
  styleUrls: ['./crud-page.component.css']
})
export class CrudPageComponent implements OnInit {

  constructor(private router: Router) { }
  
  public id_user: number;
  public nombre: string;
  public contrasena: string;
  public correo: string;

  ngOnInit() {
  }

  public loadUsuarios(){
        
    /*
    this.servicio.getUsuarios().subscribe((resp: any) =>{      
      console.log(resp.result);
      this.Usuarios=resp.result;
      
    });
    */
  }

  public insertarUser(){

  }

  public getDatosUsuarios(idU,nombreU,correoU,contraU){
    this.id_user=idU;
    this.nombre =nombreU;
    this.contrasena=contraU;
    this.correo=correoU;
  }
  deleteUser(id_user:number){
    //creamos el acceso a la base de datos
    /*
    let acceso: IdUsuario = { 
      idUser:id_user
    };
    */
    
    this.loadUsuarios();      
  }

  public logout(){
    //this.servicio.logout();
    this.router.navigate(['/']);
  }

}

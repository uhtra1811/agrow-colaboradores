import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
//import {Observable} from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();
  
  hide = true;
  Nome_Cliente!:string;
  Password!:string;

  constructor(private router: Router,  private service:SharedService) { }
  
  fazerLogin(usuario: Usuario){{

      const headers = { 
                        'Content-Type':'application/json',
                        'Authorization':'Bearer'
                    };
      const body = {   
                       usuario:this.Nome_Cliente,
                       senha:this.Password 
                    };
    
    this.service.postLogin(body, { headers }); 
    console.log(body,headers);
    this.router.navigate(['/']);};}
}



  /*fazerLogin(usuario : Usuario){

    /*if (usuario.nome === 'user' &&
    usuario.senha === '123' ||
    usuario.nome === 'uhtra' &&
    usuario.senha === '123' ) {

      this.usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['/admin']);
    }
    else{
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }*/

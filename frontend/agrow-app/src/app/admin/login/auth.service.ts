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
    
    this.service.postLoginService(body, { headers }); 
    console.log(body,headers);
    this.router.navigate(['/']);};}
}
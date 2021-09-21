import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit,Injectable, Input, Output } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{

  public usuario: Usuario = new Usuario();
  hide = true;
  Usuario:string = '';
  Empresa:string  = '';
  Senha:string = '';
  Token!:any;
  Permissao!:any;

  constructor( private service:SharedService, 
               http: HttpClient, 
               private router: Router, 
               private authService: AuthService) { }

  ngOnInit(): void {

  }

  fazerLogin(){
   {
     const headers = { 'Content-Type':'application/json',
                           'Authorization':'Bearer'
                     };
     const body = {   usuario:this.Usuario,
                      senha:this.Senha 
                    };
   this.service.postLogin(body, { headers }).subscribe(res => {
    
     //   this.token = console.info(JSON.parse(JSON.stringify(res)).token);
     this.router.navigate(['/admin'])
     this.Usuario = JSON.parse(JSON.stringify(res)).usuario
     this.Empresa = JSON.parse(JSON.stringify(res)).empresa
     this.Token = JSON.parse(JSON.stringify(res)).token
     this.Permissao = JSON.parse(JSON.stringify(res)).permissao
     localStorage.setItem('usuario', this.Usuario);
     localStorage.setItem('empresa', this.Empresa);
     localStorage.setItem('token', this.Token);
     localStorage.setItem('permissao', this.Permissao);
     },
      
    
   error => {alert("Usuário ou senha incorreto.")
   });
  }
  }
  console(){
    this.router.navigate(['/admin'])
    
  }
}


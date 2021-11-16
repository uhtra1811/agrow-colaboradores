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

  UsuarioAutenticado: boolean = false;

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
   this.service.postLoginService(body, { headers }).subscribe(res => {
    console.log(res)
     //   this.token = console.info(JSON.parse(JSON.stringify(res)).token);
     this.router.navigate(['/admin'])
     this.Usuario = JSON.parse(JSON.stringify(res)).usuario
     this.Empresa = JSON.parse(JSON.stringify(res)).empresa
     this.Token = JSON.parse(JSON.stringify(res)).token
     this.Permissao = JSON.parse(JSON.stringify(res)).permissao
     sessionStorage.setItem('usuario', this.Usuario);
     sessionStorage.setItem('empresa', this.Empresa);
     sessionStorage.setItem('token', this.Token);
     sessionStorage.setItem('permissao', this.Permissao);
     this.UsuarioAutenticado = true;
     },
      
    
   error => {alert("Usuário ou senha incorreto.")
   this.UsuarioAutenticado = false;
   });
  }
  }
  usuarioEstaAutenticado(){
   if(this.Permissao == 'Administrador'){
     this.UsuarioAutenticado = false
   }
    return false;
    
  }
  irCadastroCliente(){
    this.router.navigate(['/cadastro-usuario-cliente'])
  }
}


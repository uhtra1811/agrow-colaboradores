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
  Nome_Cliente:string = '';
  Password:string = '';


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
     const body = {   usuario:this.Nome_Cliente,
                      senha:this.Password 
                    };
   this.service.postLogin(body, { headers }).subscribe(res => {
        var token:any = console.info(res,JSON.parse(JSON.stringify(res)).token);
        localStorage.setItem("token", token);
        this.router.navigate(['/admin'])},
   error => {alert("Usuário ou senha incorreto.")
   });
  }
  }
}


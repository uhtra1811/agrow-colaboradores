import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from '../admin/login/login.component';

@Injectable({
  providedIn: 'root'
})


export class AuthGuardCliente implements CanActivate {
  constructor(
    private authService: LoginComponent,
    private router: Router
  ) { }
  
 Permissao:any = "";
 Token:any = "1";
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("A")
      return this.verificarAcesso();


      

  }
 

private verificarAcesso(){
  this.Permissao = sessionStorage.getItem('permissao');
  this.Token = sessionStorage.getItem('token');
  if (this.Permissao == "Administrador" || this.Permissao == "Cliente"){
    alert("permissão!") 

   
    return true;
  } 
  alert("Sem permissão!") 
  this.router.navigate(['/admin']);

  return false;
}

}
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from '../admin/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardAdmin implements CanActivate {
  constructor(
    private authService: LoginComponent,
    private router: Router
  ) { }
  
 Permissao:any = "";

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("A")
      return this.verificarAcesso();


      

  }
 

private verificarAcesso(){
  this.Permissao = sessionStorage.getItem('permissao');

  if (this.Permissao == "Administrador" || this.Permissao == "Cliente" ||
  this.Permissao == "Desenvolvimento" || this.Permissao == "Comercial" ||
  this.Permissao == "Suporte" || this.Permissao == "Treinamento"){
    return true;
  } 
  alert("Sem permissão!") 
  this.router.navigate(['/login']);

  return false;
}

}
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from '../admin/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardDirecao implements CanActivate {
  constructor(
    private authService: LoginComponent,
    private router: Router
  ) { }
  
 Permissao:any = "";
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.verificarAcesso();

      

  }
 

private verificarAcesso(){
  this.Permissao = sessionStorage.getItem('permissao');
  if (this.Permissao == "Administrador" || this.Permissao == "Direcao"){
    alert("permissão!") 

   
    return true;
  } 
  alert("Sem permissão!") 
  this.router.navigate(['/admin']);

  return false;
}

}
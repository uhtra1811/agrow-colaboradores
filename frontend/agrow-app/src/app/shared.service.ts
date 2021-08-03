import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://localhost:8080";

  constructor(private http:HttpClient, private router: Router) {}
  
  addCliente(val:any){
    return this.http.post(this.APIUrl + '/cliente',val);
  }
  updateCliente(val:any){
    return this.http.put(this.APIUrl + '/api/cliente',val);
  }
  deleteCliente(val:any){
    return this.http.delete(this.APIUrl + '/api/cliente/'+ val);
  }
  getClientesLista():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/clientes'); 
   // return this.http.get<any[]>(this.APIUrl  + '/api/users');
  }
  addAtendimento(val:any){
    return this.http.post(this.APIUrl + '/atendimento',val);
  }
  getAtendimentosLista():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/atendimentos');
  }






  postLogin(headers:any, body:any){7
    return this.http.post(this.APIUrl + '/login', headers, body);
}
  getListaUsuarios():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/users');
}
  addUsuario(val:any){
    return this.http.post(this.APIUrl + '/user',val);
}
  editUsuario(val:any){
    return this.http.put(this.APIUrl + '/user',val);
}
  deleteUsuario(val:any){
    return this.http.delete(this.APIUrl + '/user/' + val);
}







getRelatorio(val:any){
  return this.http.get(this.APIUrl + '/export/pdf'+ val);
}
download(): Observable<any> {
  return this.http.get(this.APIUrl + "/teste",
  {responseType:"arraybuffer"})

}
}

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
  
  addClienteService(val:any){
    return this.http.post(this.APIUrl + '/cliente',val);
  }
  updateClienteService(val:any){
    return this.http.put(this.APIUrl + '/edita-cliente',val);
  }
  deleteClienteService(val:any){
    return this.http.delete(this.APIUrl + '/cliente/'+ val);
  }
  getClientesListaService():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/clientes'); 
  }


  addAtendimentoService(val:any){
    return this.http.post(this.APIUrl + '/atendimento',val);
  }
  updateAtendimentoService(val:any){
    return this.http.put(this.APIUrl + '/edita-atendimento',val);
  }
  deleteAtendimentoService(val:any){
    return this.http.delete(this.APIUrl + '/atendimento/'+ val);
  }
  getAtendimentosListaService():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/atendimentos');
  }

  addDesenvolvimentoService(val:any){
    return this.http.post(this.APIUrl + '/desenvolvimento',val);
  }
  updateDesenvolvimentoService(val:any){
    return this.http.put(this.APIUrl + '/edita-desenvolvimento',val);
  }
  deleteDesenvolvimentoService(val:any){
    return this.http.delete(this.APIUrl + '/desenvolvimento/'+ val);
  }
  getDesenvolvimentosListaService():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/desenvolvimentos');
  }

  addTreinamentoService(val:any){
    return this.http.post(this.APIUrl + '/treinamento',val);
  }
  updateTreinamentoService(val:any){
    return this.http.put(this.APIUrl + '/edita-treinamento',val);
  }
  deleteTreinamentoService(val:any){
    return this.http.delete(this.APIUrl + '/treinamento/'+ val);
  }
  getTreinamentosListaService():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/treinamentos');
  }


  addAuditoriaService(val:any){
    return this.http.post(this.APIUrl + '/auditoria',val);
  }
  updateAuditoriaService(val:any){
    return this.http.put(this.APIUrl + '/edita-auditoria',val);
  }
  deleteAuditoriaService(val:any){
    return this.http.delete(this.APIUrl + '/auditoria/'+ val);
  }
  getAuditoriasListaService():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/auditorias');
  }


  addMigracaoService(val:any){
    return this.http.post(this.APIUrl + '/migracao',val);
  }
  updateMigracaoService(val:any){
    return this.http.put(this.APIUrl + '/edita-migracao',val);
  }
  deleteMigracaoService(val:any){
    return this.http.delete(this.APIUrl + '/migracao/'+ val);
  }
  getMigracoesListaService():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/migracoes');
  }


  postLoginService(headers:any, body:any){7
    return this.http.post(this.APIUrl + '/login', headers, body);
}
  getListaUsuariosService():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/users');
}
  addUsuarioService(val:any){
    return this.http.post(this.APIUrl + '/user',val);
}
  editUsuarioService(val:any){
    return this.http.put(this.APIUrl + '/user',val);
}
  deleteUsuarioService(val:any){
    return this.http.delete(this.APIUrl + '/user/' + val);
}







getRelatorioService(val:any){
  return this.http.get(this.APIUrl + '/export/pdf'+ val);
}
downloadService(): Observable<any> {
  return this.http.get(this.APIUrl + "/teste",
  {responseType:"arraybuffer"})

}
}

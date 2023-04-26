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
  
  //Cliente testess
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

  //Suporteaaaafa
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


  //Desenvolvimento
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

  //Treinamento
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

  //Comercial
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



 //Usuarios
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



//Relatorios
addAtendimentoRelatorioService(val:any){
  return this.http.post(this.APIUrl + '/atendimento-relatorio',val);
}

downloadRelatorioAtendimentos(): Observable<any> {
  return this.http.get(this.APIUrl + "/atendimentos-pdf",
  {responseType:"arraybuffer"})

}
downloadRelatorioAtendimentosCliente(): Observable<any> {
  return this.http.get(this.APIUrl + "/atendimentos-cliente-pdf",
  {responseType:"arraybuffer"})

}

addTreinamentoRelatorioService(val:any){
  return this.http.post(this.APIUrl + '/treinamento-relatorio',val);
}

downloadRelatorioTreinamentosCliente(): Observable<any> {
  return this.http.get(this.APIUrl + "/treinamento-cliente-pdf",
  {responseType:"arraybuffer"})

}

addDesenvolvimentoRelatorioService(val:any){
  return this.http.post(this.APIUrl + '/desenvolvimento-relatorio',val);
}

downloadRelatorioDesenvolvimentoCliente(): Observable<any> {
  return this.http.get(this.APIUrl + "/desenvolvimento-cliente-pdf",
  {responseType:"arraybuffer"})

}

addAuditoriaRelatorioService(val:any){
  return this.http.post(this.APIUrl + '/auditoria-relatorio',val);
}

downloadRelatorioAuditoriaCliente(): Observable<any> {
  return this.http.get(this.APIUrl + "/auditoria-cliente-pdf",
  {responseType:"arraybuffer"})

}

addMigracaoRelatorioService(val:any){
  return this.http.post(this.APIUrl + '/migracao-relatorio',val);
}

downloadRelatorioMigracaoCliente(): Observable<any> {
  return this.http.get(this.APIUrl + "/migracao-cliente-pdf",
  {responseType:"arraybuffer"})

}
addRelatorioService(val1:any){
  return this.http.post(this.APIUrl + '/edita-relatorio',val1);
}

getRelatorioERPListaService():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl + '/relatorio-erp'); 
}

addClienteRelatorioService(val:any){
  return this.http.post(this.APIUrl + '/cliente-relatorio',val);
}

downloadClientePdf(): Observable<any> {
  return this.http.get(this.APIUrl + "/cliente-pdf",
  {responseType:"arraybuffer"})

}



getLogAtualizacaoListaService():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl + '/log-atualizacao'); 
}
addLogAtualizacaoService(val:any){
  return this.http.post(this.APIUrl + '/add-log',val);
}
}

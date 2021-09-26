import { HttpClient, HttpHeaders } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {
 

  constructor(private service:SharedService, http: HttpClient) { }

  cad:any;

  Cliente!:string;
  Licencas!:string;
  Versao!:string;
  Telefone!:string;
  Firebird!:string;
  Validacao!:string;


  Password!:string;

  Id_Cliente!: number;
  ClientesLista!:any[];

  AtivarCadastro:boolean=false;

  ModalTitle!:string;

  ngOnInit(): void {

 this.refreshClientesLista(); 
   this.Cliente=this.Cliente;
   this.Password=this.Password;
  }


  addCliente(){
    if(this.Cliente == ""){
      alert("Informe o cliente")

    }else{
    var val =  {cliente:this.Cliente,
                licencas:this.Licencas,
                versao:this.Versao,
                telefone:this.Telefone,
                firebird:this.Firebird,
                validacao:this.Validacao};
    this.service.addClienteService(val).subscribe(res=>{
      alert("Adicionado com sucesso!");
    },
    error => {alert("Erro ao salvar,revise as informações preenchidas.")
    });
      this.Cliente="";
      this.Licencas="";
      this.Versao="";
      this.Telefone="";
      this.Firebird="";
      this.Validacao="";

  }
}
 
refreshClientesLista(){
  this.service.getClientesListaService().subscribe(data=>{
    this.ClientesLista=data;
  });
}
}
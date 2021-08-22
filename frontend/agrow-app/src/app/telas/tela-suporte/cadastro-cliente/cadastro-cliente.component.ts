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
    var val =  {cliente:this.Cliente,
                licencas:this.Licencas,
                versao:this.Versao,
                telefone:this.Telefone,
                firebird:this.Firebird,
                validacao:this.Validacao};
    this.service.addCliente(val).subscribe(res=>{
      alert("Adicionado com sucesso!");
    });
      this.Cliente="";
  }
 
refreshClientesLista(){
  this.service.getClientesLista().subscribe(data=>{
    this.ClientesLista=data;
  });
}
}
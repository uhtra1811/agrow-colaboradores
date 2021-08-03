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
    var val =  {cliente:this.Cliente};
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
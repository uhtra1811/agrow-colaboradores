import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-mostra-clientes',
  templateUrl: './mostra-clientes.component.html',
  styleUrls: ['./mostra-clientes.component.css']
})
export class MostraClientesComponent implements OnInit {

  constructor(private service:SharedService, private router: Router) { }

  cad:any; 
 
  
  Nome_Cliente!:string;
  Id_Cliente!: number;
  ClientesLista!:any[];
  AtivarCadastro:boolean=false;

  ModalTitle!:string;

  
  ngOnInit(): void {
    this.mostrarClientes();
  }

  mostrarClientes(){
    this.service.getClientesLista().subscribe(data=>{
      this.ClientesLista=data;
      console.log(this.ClientesLista);
    });
  }
  refreshClientesLista(){
    this.service.getClientesLista().subscribe(data=>{
      this.ClientesLista=data;
    });
  }
  editarClienteModal(item: any){
    this.cad=item;
    this.ModalTitle="Editar Atendimento";
    this.AtivarCadastro=true;
    this.refreshClientesLista();

  }
  deleteClick(item: any){
    if(confirm('Deseja deletar?')){
      this.service.deleteCliente(item.id_cliente).subscribe(data=>{
        alert(data.toString());});
        this.refreshClientesLista();
    }
    this.refreshClientesLista();
  }

  closeClick(){
    this.refreshClientesLista();

  }
  
}

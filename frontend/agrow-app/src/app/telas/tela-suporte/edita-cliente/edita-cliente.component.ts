import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-edita-cliente',
  templateUrl: './edita-cliente.component.html',
  styleUrls: ['./edita-cliente.component.css']
})
export class EditaClienteComponent implements OnChanges {
  
  @Input() cad:any = [];

  Id_Cliente!:string ;
  Nome_Cliente!:string ;
  ClientesLista!:any[];


  constructor(private service:SharedService) { }

  ngOnChanges(): void { 
    this.mostrarClientes();
    this.refreshClientesLista();
    this.atualizaCadCliente();
  }

  updateCliente(){
    var val = { id_cliente:this.Id_Cliente,
                nome_cliente:this.Nome_Cliente};
    this.service.updateCliente(val).subscribe(res=>{
    alert(res.toString());
    console.log(val)
    });

  }

  atualizaCadCliente(){
    this.Id_Cliente = this.cad.id_cliente;
    this.Nome_Cliente = this.cad.nome_cliente;
    console.log(this.cad);
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
}

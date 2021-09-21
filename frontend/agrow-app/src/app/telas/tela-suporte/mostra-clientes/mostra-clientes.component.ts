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
  
  ClientesLista!:any[];
  ClientesListaSemFiltro!:any[];

  AtivarCadastro:boolean=false;


  Id_Cliente!: string;
  Cliente!:string;
  Licencas!:string;
  Versao!:string;
  Telefone!:string;
  Firebird!:string;
  Validacao!:string;

  Id_ClienteFiltro!: string;
  ClienteFiltro!:string;
  LicencasFiltro!:string;
  VersaoFiltro!:string;
  TelefoneFiltro!:string;
  FirebirdFiltro!:string;
  ValidacaoFiltro!:string;

  ModalTitle!:string;

  
  ngOnInit(): void {
    this.mostrarClientes();
    this.refreshClientesLista();
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
      this.ClientesListaSemFiltro=data;
    });
  }


  editarClienteModal(item: any){
    this.cad=item;
    this.ModalTitle="Editar Atendimento";
    this.AtivarCadastro=true;
    this.cad=item;
    this.Id_Cliente= this.cad.id
    this.Cliente= this.cad.cliente
    this.Licencas= this.cad.licencas
    this.Versao= this.cad.versao
    this.Telefone= this.cad.telefone
    this.Firebird= this.cad.firebird
    this.Validacao= this.cad.validacao
 
  }
  deleteCliente(item: any){
    if(confirm('Deseja deletar?')){
      this.service.deleteCliente(item.id).subscribe(data=>{
        alert("Deletado com sucesso");
        this.ngOnInit();
      },
      error => {alert("Erro ao deletar!");
    });
   }
  }

  closeClick(){
    this.refreshClientesLista();

  }
  updateCliente(){
    var val = {id:this.Id_Cliente,
               cliente:this.Cliente,
               licencas:this.Licencas,
               versao:this.Versao,
               telefone:this.Telefone,
               firebird:this.Firebird,
               validacao:this.Validacao};
  this.service.updateCliente(val).subscribe(res=>{
      alert("Editado com sucesso!");
      this.ngOnInit();
    },
  error => {alert("Erro ao editar,revise as informações preenchidas.")
    });
      this.Cliente="";
      this.Licencas="";
      this.Versao="";
      this.Telefone="";
      this.Firebird="";
      this.Validacao="";

  }

  
  filtroIdCliente(){
    var Id_ClienteFiltro:string = "" + this.Id_ClienteFiltro;
    this.ClientesLista = this.ClientesListaSemFiltro.filter(function (el:any){
        return el.id.toString().toLowerCase().includes(
          Id_ClienteFiltro.toString().trim().toLowerCase()
        )
    });
  }
 
  filtroCliente(){
    var ClienteNomeFiltro:string = "" + this.ClienteFiltro;
    this.ClientesLista = this.ClientesListaSemFiltro.filter(function (el:any){
        return el.cliente.toString().toLowerCase().includes(
          ClienteNomeFiltro.toString().trim().toLowerCase()
        )
    });
  }
  filtroLicencasCliente(){
    var LicencasFiltro:string = "" + this.LicencasFiltro;
    this.ClientesLista = this.ClientesListaSemFiltro.filter(function (el:any){
        return el.usuario.toString().toLowerCase().includes(
          LicencasFiltro.toString().trim().toLowerCase()
        )
    });
  }
  filtroVersaoCliente(){
    var VersaoFiltro:string = "" + this.VersaoFiltro;
    this.ClientesLista = this.ClientesListaSemFiltro.filter(function (el:any){
        return el.meiodecontato.toString().toLowerCase().includes(
          VersaoFiltro.toString().trim().toLowerCase()
        )
    });
  }
  filtroTelefoneCliente(){
    var TelefoneFiltro:string = "" + this.TelefoneFiltro;
    this.ClientesLista = this.ClientesListaSemFiltro.filter(function (el:any){
        return el.motivo.toString().toLowerCase().includes(
          TelefoneFiltro.toString().trim().toLowerCase()
        )
    });
  }

  filtroFirebirdCliente(){
    var FirebirdFiltro:string = "" + this.FirebirdFiltro;
    this.ClientesLista = this.ClientesListaSemFiltro.filter(function (el:any){
        return el.solucao.toString().toLowerCase().includes(
          FirebirdFiltro.toString().trim().toLowerCase()
        )
    });
  }

  filtroValidacaoCliente(){
    var ValidacaoFiltro:string = "" + this.ValidacaoFiltro;
    this.ClientesLista = this.ClientesListaSemFiltro.filter(function (el:any){
        return el.avaliacao.toString().toLowerCase().includes(
          ValidacaoFiltro.toString().trim().toLowerCase()
        )
    });
  }


  console(){
    console.log(this.Id_ClienteFiltro)
  }
}

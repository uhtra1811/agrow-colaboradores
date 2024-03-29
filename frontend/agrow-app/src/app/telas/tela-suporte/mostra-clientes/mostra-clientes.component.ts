import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import * as FileSaver from 'file-saver';

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
  Validar!:string;
  Satisfacao!:string;
  SatisfacaoAtendimento!:string;
  SatisfacaoAuditoria!:string;
  SatisfacaoDesenvolvimento!:string;
  SatisfacaoTreinamento!:string;
  SatisfacaoMigracao!:string;

  Id_ClienteFiltro!: string;
  ClienteFiltro!:string;
  LicencasFiltro!:string;
  VersaoFiltro!:string;
  TelefoneFiltro!:string;
  FirebirdFiltro!:string;
  ValidacaoFiltro!:string;
  ValidarFiltro!:string;
  SatisfacaoFiltro!:string;

  ModalTitle!:string;
  MostraFiltro:boolean = false;
  
  ngOnInit(): void {
    this.mostrarClientes();
    this.refreshClientesLista();
    this.acionaTrigger();
  }

  mostrarFiltro(){
    this.MostraFiltro = !this.MostraFiltro;
  }
  mostrarClientes(){
    this.service.getClientesListaService().subscribe(data=>{
      this.ClientesLista=data;
      console.log(this.ClientesLista);
    });
  }
  refreshClientesLista(){
    this.service.getClientesListaService().subscribe(data=>{
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
    this.Validar= this.cad.validar
    this.Satisfacao= this.cad.satisfacao
    this.SatisfacaoAtendimento= this.cad.satisfacao_atendimento
    this.SatisfacaoAuditoria= this.cad.satisfacao_auditoria
    this.SatisfacaoDesenvolvimento= this.cad.satisfacao_desenvolvimento
    this.SatisfacaoMigracao= this.cad.satisfacao_migracao
    this.SatisfacaoTreinamento= this.cad.satisfacao_treinamento
 
  }
  deleteCliente(item: any){
    if(confirm('Deseja deletar?')){
      this.service.deleteClienteService(item.id).subscribe(data=>{
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
               validacao:this.Validacao,
               validar:this.Validar,
               satisfacao:this.Satisfacao,
               satisfacao_atendimento:this.SatisfacaoAtendimento,
               satisfacao_auditoria:this.SatisfacaoAuditoria,
               satisfacao_desenvolvimento:this.SatisfacaoDesenvolvimento,
               satisfacao_migracao:this.SatisfacaoMigracao,
               satisfacao_treinamento:this.SatisfacaoTreinamento};
  this.service.updateClienteService(val).subscribe(res=>{
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
      this.Validar="";

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
        return el.licencas.toString().toLowerCase().includes(
          LicencasFiltro.toString().trim().toLowerCase()
        )
    });
  }
  filtroVersaoCliente(){
    var VersaoFiltro:string = "" + this.VersaoFiltro;
    this.ClientesLista = this.ClientesListaSemFiltro.filter(function (el:any){
        return el.versao.toString().toLowerCase().includes(
          VersaoFiltro.toString().trim().toLowerCase()
        )
    });
  }
  filtroTelefoneCliente(){
    var TelefoneFiltro:string = "" + this.TelefoneFiltro;
    this.ClientesLista = this.ClientesListaSemFiltro.filter(function (el:any){
        return el.telefone.toString().toLowerCase().includes(
          TelefoneFiltro.toString().trim().toLowerCase()
        )
    });
  }

  filtroFirebirdCliente(){
    var FirebirdFiltro:string = "" + this.FirebirdFiltro;
    this.ClientesLista = this.ClientesListaSemFiltro.filter(function (el:any){
        return el.firebird.toString().toLowerCase().includes(
          FirebirdFiltro.toString().trim().toLowerCase()
        )
    });
  }

  filtroValidacaoCliente(){
    var ValidacaoFiltro:string = "" + this.ValidacaoFiltro;
    this.ClientesLista = this.ClientesListaSemFiltro.filter(function (el:any){
        return el.validacao.toString().toLowerCase().includes(
          ValidacaoFiltro.toString().trim().toLowerCase()
        )
    });
  }

  filtroValidarCliente(){
    var ValidarFiltro:string = "" + this.ValidarFiltro;
    this.ClientesLista = this.ClientesListaSemFiltro.filter(function (el:any){
        return el.validar.toString().toLowerCase().includes(
          ValidarFiltro.toString().trim().toLowerCase()
        )
    });
  }

  filtroSatisfacaoCliente(){
    var SatisfacaoFiltro:string = "" + this.SatisfacaoFiltro;
    this.ClientesLista = this.ClientesListaSemFiltro.filter(function (el:any){
        return el.satisfacao.toString().toLowerCase().includes(
          SatisfacaoFiltro.toString().trim().toLowerCase()
        )
    });
  }

  geraRelatorio(){
    this.service.downloadClientePdf().subscribe(
      (res) => {
        let blob = new Blob([res], { type: 'pdf' });
         FileSaver.saveAs(blob, "Clientes.pdf")

    });
  } 

  acionaTrigger(){
    var val1 =  {
      edita:"1"
    };             
     this.service.addRelatorioService(val1).subscribe();

  }
 
  insertRelatorioCliente(){

      var val = this.ClientesLista
     
      this.service.addClienteRelatorioService(val).subscribe(res=>{
       
      
       
        this.geraRelatorio();
      },  
      error => {alert("Erro ao gerar relatorio")
      });
    }


 
  exportarRelatorio(){
    this.acionaTrigger();
    
    this.delay(1000).then(any=>{
       this.insertRelatorioCliente();});
    
  }

  async delay(ms: number) {
    await new Promise<void>(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
}
}

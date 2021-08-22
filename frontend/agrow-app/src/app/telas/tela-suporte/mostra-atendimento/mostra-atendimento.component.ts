import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as FileSaver from 'file-saver';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-mostra-atendimento',
  templateUrl: './mostra-atendimento.component.html',
  styleUrls: ['./mostra-atendimento.component.css']
})
export class MostraAtendimentoComponent implements OnInit {

  constructor(private service:SharedService, private router: Router) { }

  cad:any;

  ModalTitle!:string;
  MostraModal:boolean = false;

  AtendimentosLista!:any[];
  AtendimentosListaSemFiltro!:any[];

  Id_AtendimentoFiltro!: string;
  ClienteNomeFiltro:string="";
  UsuarioNomeFiltro:string="";
  MotivoFiltro:string="";
  ContatoFiltro:string="";
  SolucaoFiltro:string="";
  DataFiltro:string="";

  ngOnInit(): void {
    this.mostrarAtendimentos();
    this.refreshAtendimentosLista();
  }
  ngOnChanges(): void {
 
    this.refreshAtendimentosLista();
  }

  mostrarModal(){
    this.MostraModal = !this.MostraModal;
  }

  mostrarAtendimentos(){
    this.service.getAtendimentosLista().subscribe(data=>{
      this.AtendimentosLista=data;
      console.log(this.AtendimentosLista);
    });
  }
  editaAtendimento(item: any){
    this.cad = item;


  }

  filtroIdAtendimento(){
    var Id_AtendimentoFiltro:string = "" + this.Id_AtendimentoFiltro;
    this.AtendimentosLista = this.AtendimentosListaSemFiltro.filter(function (el:any){
        return el.id.toString().toLowerCase().includes(
          Id_AtendimentoFiltro.toString().trim().toLowerCase()
        )
    });
  }

  filtroClienteAtendimento(){
    var ClienteNomeFiltro:string = "" + this.ClienteNomeFiltro;
    this.AtendimentosLista = this.AtendimentosListaSemFiltro.filter(function (el:any){
        return el.cliente.toString().toLowerCase().includes(
          ClienteNomeFiltro.toString().trim().toLowerCase()
        )
    });
  }
  filtroUsuarioAtendimento(){
    var UsuarioNomeFiltro:string = "" + this.UsuarioNomeFiltro;
    this.AtendimentosLista = this.AtendimentosListaSemFiltro.filter(function (el:any){
        return el.usuario.toString().toLowerCase().includes(
          UsuarioNomeFiltro.toString().trim().toLowerCase()
        )
    });
  }
  filtroContatoAtendimento(){
    var ContatoFiltro:string = "" + this.ContatoFiltro;
    this.AtendimentosLista = this.AtendimentosListaSemFiltro.filter(function (el:any){
        return el.meiodecontato.toString().toLowerCase().includes(
          ContatoFiltro.toString().trim().toLowerCase()
        )
    });
  }
  filtroMotivoAtendimento(){
    var MotivoFiltro:string = "" + this.MotivoFiltro;
    this.AtendimentosLista = this.AtendimentosListaSemFiltro.filter(function (el:any){
        return el.motivo.toString().toLowerCase().includes(
          MotivoFiltro.toString().trim().toLowerCase()
        )
    });
  }

  filtroSolucaoAtendimento(){
    var SolucaoFiltro:string = "" + this.SolucaoFiltro;
    this.AtendimentosLista = this.AtendimentosListaSemFiltro.filter(function (el:any){
        return el.solucao.toString().toLowerCase().includes(
          SolucaoFiltro.toString().trim().toLowerCase()
        )
    });
  }
  filtroDataAtendimento(){
    var DataFiltro:string = "" + this.DataFiltro;
    this.AtendimentosLista = this.AtendimentosListaSemFiltro.filter(function (el:any){
        return el.motivo.toString().toLowerCase().includes(
          DataFiltro.toString().trim().toLowerCase()
        )
    });
  }

  geraRelatorio(){
    this.service.download().subscribe(
      (res) => {
        let blob = new Blob([res], { type: 'pdf' });
         FileSaver.saveAs(blob, "Atendimentos.pdf")

    });
  } 
  refreshAtendimentosLista(){
    this.service.getAtendimentosLista().subscribe(data=>{
      this.AtendimentosLista=data;
      this.AtendimentosListaSemFiltro=data});
  }

  closeClick(){
    
  }
}

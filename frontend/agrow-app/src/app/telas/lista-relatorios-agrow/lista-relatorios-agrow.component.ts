import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as FileSaver from 'file-saver';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-lista-relatorios-agrow',
  templateUrl: './lista-relatorios-agrow.component.html',
  styleUrls: ['./lista-relatorios-agrow.component.css']
})
export class ListaRelatoriosAgrowComponent implements OnInit {

  constructor(private service:SharedService, private router: Router) { }

  MostrarAvaliacaoHabilitada:boolean = true
  MostrarAvaliacaoDesabilitada:boolean = true
  
 
  cad:any;
 
  ModalTitle!:string;
  MostraModal:boolean = false;

  RelatorioERPLista!:any[];
  RelatorioERPListaSemFiltro!:any[];

  Id_DesenvolvimentoFiltro!: string;
  ClienteNomeFiltro:string="";
  UsuarioNomeFiltro:any="";
  MotivoFiltro:string="";
  ContatoFiltro:string="";
  SolucaoFiltro:string="";
  DataFiltro:string="";


  Id_RelatorioERP!: number;
  Id_RelatorioERPFiltro!: number;
  RelatorioERP!:string;
  RelatorioERPFiltro!:string;

  MostraLoading:boolean = true;
  MostrarTabela:boolean = false;
  MostraFiltro:boolean = false;
  value: number = 0;

  today:any = new Date();
  dd = String(this.today.getDate()).padStart(2, '0');
  mm = String(this.today.getMonth() + 1).padStart(2, '0'); //Janeiro é 0!
  yyyy = this.today.getFullYear();
  todayis: any = this.today = this.yyyy + '-' + this.mm + '-' + this.dd;


 
  ngOnInit(): void {
    this.UsuarioNomeFiltro = localStorage.getItem('usuario');
   
   
    //this.mostrarDesenvolvimentos();
    
    this.mostrarRelatorioERP();
//    this.refreshMostrarRelatorioERP();

  }


  mostrarRelatorioERP(){
    this.service.getRelatorioERPListaService().subscribe(data=>{
      this.RelatorioERPLista=data;
      this.RelatorioERPListaSemFiltro=data;}            
      );
  }



  filtroIdRelatorioERP(){
    var Id_RelatorioERPFiltro:string = "" + this.Id_RelatorioERPFiltro;
    this.RelatorioERPLista = this.RelatorioERPListaSemFiltro.filter(function (el:any){
        return el.id.toString().toLowerCase().includes(
          Id_RelatorioERPFiltro.toString().trim().toLowerCase()
        )
    });
  }


  filtroRelatorioERP(){
    var RelatorioERPFiltro:string = "" + this.RelatorioERPFiltro;
    this.RelatorioERPLista = this.RelatorioERPListaSemFiltro.filter(function (el:any){
        return el.relatorioERP.toString().toLowerCase().includes(
          RelatorioERPFiltro.toString().trim().toLowerCase()
        )
    });
  }


  refreshMostrarRelatorioERP(){
    this.service.getRelatorioERPListaService().subscribe(data=>{
      this.RelatorioERPLista=data;
      this.RelatorioERPListaSemFiltro=data});
      
  }
  mostrarFiltro(){
    this.MostraFiltro = !this.MostraFiltro;
  }
}

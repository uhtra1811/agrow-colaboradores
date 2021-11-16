import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-log-atualizacao',
  templateUrl: './log-atualizacao.component.html',
  styleUrls: ['./log-atualizacao.component.css']
})
export class LogAtualizacaoComponent implements OnInit {

  constructor(private service:SharedService, private router: Router) { }

  MostrarAvaliacaoHabilitada:boolean = true
  MostrarAvaliacaoDesabilitada:boolean = true
  
 
  cad:any;
 
  ModalTitle!:string;
  MostraModal:boolean = false;

  LogAtualizacaoLista!:any[];
  LogAtualizacaoListaSemFiltro!:any[];


  Id_Log!: number;
  Log_Versao!: number;
  Log!:string;
  LogFiltro!:string;

  MostraLoading:boolean = true;
  MostrarTabela:boolean = false;
  MostraFiltro:boolean = false;
  value: number = 0;

 
  ngOnInit(): void {
    this.mostrarLogAtualizacao();
    console.log(  this.LogAtualizacaoLista)
  }


  mostrarLogAtualizacao(){
    this.service.getLogAtualizacaoListaService().subscribe(data=>{
      this.LogAtualizacaoLista=data;
      this.LogAtualizacaoListaSemFiltro=data;}            
      );
  }

  refreshMostrarLogAtualizacaoLista(){
    this.service.getLogAtualizacaoListaService().subscribe(data=>{
      this.LogAtualizacaoLista=data;
      this.LogAtualizacaoListaSemFiltro=data});
      
  }

  mostrarFiltro(){
    this.MostraFiltro = !this.MostraFiltro;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicita-treinamento',
  templateUrl: './solicita-treinamento.component.html',
  styleUrls: ['./solicita-treinamento.component.css']
})
export class SolicitaTreinamentoComponent implements OnInit {


  Id_Atendimento!: number;
  Cliente_Atendimento!:string;
  Usuario_Atendimento!:string;
  Motivo_Atendimento!:string;
  Meiodecontato_Atendimento!:string;
  Mensagem_Atendimento!:string;
  Solucao_Atendimento!:string;
  Data_Atendimento!:string;
  AtendimentosLista!:any[];
  
  
  constructor() { }

  ngOnInit(): void {
  }

}

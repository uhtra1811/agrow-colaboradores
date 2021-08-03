import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edita-atendimento',
  templateUrl: './edita-atendimento.component.html',
  styleUrls: ['./edita-atendimento.component.css']
})
export class EditaAtendimentoComponent implements OnInit {


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

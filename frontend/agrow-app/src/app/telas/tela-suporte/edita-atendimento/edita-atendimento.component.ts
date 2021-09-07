import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edita-atendimento',
  templateUrl: './edita-atendimento.component.html',
  styleUrls: ['./edita-atendimento.component.css']
})
export class EditaAtendimentoComponent implements OnInit {

  @Input() cad:any;

  AtendimentosLista!:any[];
  

  Id_Atendimento!: number;
  Cliente_Atendimento!:string;
  Usuario_Atendimento!:string;
  Motivo_Atendimento!:string;
  Meiodecontato_Atendimento!:string;
  Solucao_Atendimento!:string;
  Data_Atendimento!:string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.cad);
    this.Cliente_Atendimento = "oi";
    
    
    
    /*
    this.cad.id =    this.Id_Atendimento;
    this.cad.cliente =this.Cliente_Atendimento ;
    this.Usuario_Atendimento = this.cad.usuario;
    this.Motivo_Atendimento = this.cad.motivo;
    this.Meiodecontato_Atendimento = this.cad.meiodecontato;
    this.Solucao_Atendimento = this.cad.solucao;
    this.Data_Atendimento = this.cad.data;
*/
  }
  console(){
    console.log(this.cad, "arthur");
  }

}

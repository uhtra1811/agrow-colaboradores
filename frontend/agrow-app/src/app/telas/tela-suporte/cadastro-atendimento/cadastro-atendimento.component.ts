import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-cadastro-atendimento',
  templateUrl: './cadastro-atendimento.component.html',
  styleUrls: ['./cadastro-atendimento.component.css']
})
export class CadastroAtendimentoComponent implements OnInit {


  constructor(private service:SharedService, private router: Router) { }
  
  Id_Atendimento!: number;
  Cliente_Atendimento!:string;
  Usuario_Atendimento!:string;
  Motivo_Atendimento!:string;
  Meiodecontato_Atendimento!:string;
  Mensagem_Atendimento!:string;
  Solucao_Atendimento!:string;
  Data_Atendimento!:string;
  AtendimentosLista!:any[];

  today:any = new Date();
  dd = String(this.today.getDate()).padStart(2, '0');
  mm = String(this.today.getMonth() + 1).padStart(2, '0'); //Janeiro é 0!
  yyyy = this.today.getFullYear();
  todayis: any = this.today = this.yyyy + '-' + this.mm + '-' + this.dd;


  ngOnInit(): void {
   this.Data_Atendimento=this.todayis;
  }

  addAtendimento(){
    var val =  {cliente:this.Cliente_Atendimento,
                usuario:this.Usuario_Atendimento,
                motivo:this.Motivo_Atendimento,
                meiodecontato:this.Meiodecontato_Atendimento,
                solucao:this.Solucao_Atendimento,
                data:this.Data_Atendimento
              };
    this.service.addAtendimento(val).subscribe(res=>{
      alert("Adicionado com sucesso! Data:" + this.Data_Atendimento);
    },  
    error => {alert("Erro ao salvar,revise as informações preenchidas.")
    });
      this.Cliente_Atendimento="";
      this.Usuario_Atendimento="";
      this.Motivo_Atendimento="";
      this.Meiodecontato_Atendimento= "";
      this.Mensagem_Atendimento="";
      this.Solucao_Atendimento="";
  }

  refreshAtendimentosLista(){
    this.service.getClientesLista().subscribe(data=>{
      this.AtendimentosLista=data;
    });
  }
  
}

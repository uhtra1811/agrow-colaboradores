import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-cadastra-log-atualizacao',
  templateUrl: './cadastra-log-atualizacao.component.html',
  styleUrls: ['./cadastra-log-atualizacao.component.css']
})
export class CadastraLogAtualizacaoComponent implements OnInit {


  constructor(private service:SharedService, private router: Router) { }
  
  cli!:string;
  Log_Versao:string ="";
  Log:string = "";

  ngOnInit(): void {

  }

  addLog(){
    var val =  {
                log:this.Log,
                versao:this.Log_Versao,
              };             
    this.service.addLogAtualizacaoService(val).subscribe(res=>{
      console.log(val)
      alert("Adicionado com sucesso!");
    },  
    error => {alert("Erro ao salvar,revise as informações preenchidas.")
    });
      this.Log_Versao="";
      this.Log= "";
 }
}

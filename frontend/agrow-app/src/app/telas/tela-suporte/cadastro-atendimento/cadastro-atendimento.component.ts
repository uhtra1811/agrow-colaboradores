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
  
  cli!:string;
  Id_Atendimento!: number;
  Cliente_Atendimento:string ="";
  Usuario_Atendimento:string = "";
  Motivo_Atendimento:string = "";
  Meiodecontato_Atendimento:string = "";
  Mensagem_Atendimento:string = "";
  Solucao_Atendimento:string = "";
  Avaliacao_Atendimento:string = "";
  Atendente_Atendimento:any ="";
  Data_Atendimento:string = "";
  ClientesLista!:any[];

  today:any = new Date();
  dd = String(this.today.getDate()).padStart(2, '0');
  mm = String(this.today.getMonth() + 1).padStart(2, '0'); //Janeiro é 0!
  yyyy = this.today.getFullYear();
  todayis: any = this.today = this.yyyy + '-' + this.mm + '-' + this.dd;


  ngOnInit(): void {
   this.refreshClientesLista();
   this.Data_Atendimento=this.todayis;
  }

  addAtendimento(){
    if(this.Cliente_Atendimento === "" || this.Cliente_Atendimento ==="-Selecione o Cliente-"){
      alert("Selecione o cliente.")}
    else{
    this.Atendente_Atendimento = localStorage.getItem("usuario");
    var val =  {
                cliente:this.Cliente_Atendimento,
                usuario:this.Usuario_Atendimento,
                motivo:this.Motivo_Atendimento,
                meiodecontato:this.Meiodecontato_Atendimento,
                solucao:this.Solucao_Atendimento,
                avaliacao:this.Avaliacao_Atendimento,
                atendente:this.Atendente_Atendimento,
                data:this.Data_Atendimento
              };             
    this.service.addAtendimento(val).subscribe(res=>{
      alert("Adicionado com sucesso! Data:" + this.Data_Atendimento);
    },  
    error => {alert("Erro ao salvar,revise as informações preenchidas.")
    });
      //this.Cliente_Atendimento="";
      this.Usuario_Atendimento="";
      this.Motivo_Atendimento="";
      this.Meiodecontato_Atendimento= "";
      this.Mensagem_Atendimento="";
      this.Solucao_Atendimento="";
  }
}

  refreshClientesLista(){
    this.service.getClientesLista().subscribe(data=>{
      this.ClientesLista=data;
    });
    
  }
  cadastrarCliente(){
    this.router.navigate(['/admin/cadastro-cliente']);
  }
}

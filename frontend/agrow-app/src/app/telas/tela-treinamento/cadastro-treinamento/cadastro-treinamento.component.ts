import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-cadastro-treinamento',
  templateUrl: './cadastro-treinamento.component.html',
  styleUrls: ['./cadastro-treinamento.component.css']
})
export class CadastroTreinamentoComponent implements OnInit {


  constructor(private service:SharedService, private router: Router) { }
  
  cli!:string;
  Id_Treinamento!: number;
  Cliente_Treinamento:string ="";
  Usuario_Treinamento:string = "";
  Motivo_Treinamento:string = "";
  Meiodecontato_Treinamento:string = "";
  Mensagem_Treinamento:string = "";
  Nivel_Treinamento:string = "";
  Avaliacao_Treinamento:string = "";
  Atendente_Treinamento:any ="";
  Data_Treinamento:string = "";
  ClientesLista!:any[];

  today:any = new Date();
  dd = String(this.today.getDate()).padStart(2, '0');
  mm = String(this.today.getMonth() + 1).padStart(2, '0'); //Janeiro é 0!
  yyyy = this.today.getFullYear();
  todayis: any = this.today = this.yyyy + '-' + this.mm + '-' + this.dd;


  ngOnInit(): void {
   this.refreshClientesLista();
   this.Data_Treinamento=this.todayis;
  }

  addTreinamento(){
    if(this.Cliente_Treinamento === "" || this.Cliente_Treinamento ==="-Selecione o Cliente-"){
      alert("Selecione o cliente.")}
    else{
    this.Atendente_Treinamento = sessionStorage.getItem("usuario");
    var val =  {
                cliente:this.Cliente_Treinamento,
                usuario:this.Usuario_Treinamento,
                nivel:this.Nivel_Treinamento,
                avaliacao:this.Avaliacao_Treinamento,
                atendente:this.Atendente_Treinamento,
                data:this.Data_Treinamento
              };            
    this.service.addTreinamentoService(val).subscribe(res=>{
      alert("Adicionado com sucesso! Data:" + this.Data_Treinamento);
    },  
    error => {alert("Erro ao salvar,revise as informações preenchidas.")
    });
      //this.Cliente_Treinamento="";
      this.Usuario_Treinamento="";
      this.Motivo_Treinamento="";
      this.Meiodecontato_Treinamento= "";
      this.Mensagem_Treinamento="";
      this.Nivel_Treinamento="";
  }
}

  refreshClientesLista(){
    this.service.getClientesListaService().subscribe(data=>{
      this.ClientesLista=data;
    });
    
  }
  cadastrarCliente(){
    this.router.navigate(['/admin/cadastro-cliente']);
  }
}

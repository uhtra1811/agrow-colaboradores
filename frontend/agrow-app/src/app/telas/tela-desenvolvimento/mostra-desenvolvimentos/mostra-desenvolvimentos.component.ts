import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as FileSaver from 'file-saver';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-mostra-desenvolvimentos',
  templateUrl: './mostra-desenvolvimentos.component.html',
  styleUrls: ['./mostra-desenvolvimentos.component.css']
})
export class MostraDesenvolvimentosComponent implements OnInit {

  constructor(private service:SharedService, private router: Router) { }

  MostrarAvaliacaoHabilitada:boolean = true
  MostrarAvaliacaoDesabilitada:boolean = true
  
 
  cad:any;
 
  ModalTitle!:string;
  MostraModal:boolean = false;

  DesenvolvimentosLista!:any[];
  DesenvolvimentosListaSemFiltro!:any[];

  Id_DesenvolvimentoFiltro!: string;
  ClienteNomeFiltro:string="";
  UsuarioNomeFiltro:any="";
  MotivoFiltro:string="";
  ContatoFiltro:string="";
  SolucaoFiltro:string="";
  DataFiltro:string="";


  Id_Desenvolvimento!: number;
  Cliente_Desenvolvimento!:string;
  Usuario_Desenvolvimento!:string;
  Motivo_Desenvolvimento!:string;
  Meiodecontato_Desenvolvimento!:string;
  Mensagem_Desenvolvimento!:string;
  Solucao_Desenvolvimento!:string;
  Avaliacao_Desenvolvimento:number = 0;
  Data_Desenvolvimento!:string;
  MostraLoading:boolean = true;
  MostrarTabela:boolean = true;
  value: number = 0;

  today:any = new Date();
  dd = String(this.today.getDate()).padStart(2, '0');
  mm = String(this.today.getMonth() + 1).padStart(2, '0'); //Janeiro é 0!
  yyyy = this.today.getFullYear();
  todayis: any = this.today = this.yyyy + '-' + this.mm + '-' + this.dd;


 
  ngOnInit(): void {
    this.UsuarioNomeFiltro = sessionStorage.getItem('usuario');
    this.Usuario_Desenvolvimento = this.UsuarioNomeFiltro;
   
    //this.mostrarDesenvolvimentos();
  this.mostrarDesenvolvimentos();
    this.refreshDesenvolvimentosLista();
  }


  mostrarTabela(){
    this.MostrarTabela = !this.MostrarTabela;
  }
  async delay(ms: number) {
    await new Promise<void>(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
}
  
  mostrarModal(){
    
    this.MostraModal = !this.MostraModal;
    
  }

  mostrarDesenvolvimentos(){
    this.service.getDesenvolvimentosListaService().subscribe(data=>{
      this.DesenvolvimentosLista=data;});

  }
  editaDesenvolvimento(item: any){
    this.cad=item;
    this.Id_Desenvolvimento= this.cad.id
    this.Cliente_Desenvolvimento= this.cad.cliente
    this.Usuario_Desenvolvimento= this.cad.usuario
    this.Motivo_Desenvolvimento= this.cad.motivo
    this.Meiodecontato_Desenvolvimento= this.cad.meiodecontato
    this.Mensagem_Desenvolvimento= this.cad
    this.Solucao_Desenvolvimento= this.cad.solucao
    this.value = this.cad.avaliacao;
    this.Data_Desenvolvimento= this.cad.data
    console.log(this.cad);
    if(this.value > 0){
      this.MostrarAvaliacaoHabilitada = false;
      this.MostrarAvaliacaoDesabilitada = true;

    }else{
      this.MostrarAvaliacaoHabilitada = true;
      this.MostrarAvaliacaoDesabilitada = false;
    }
  
  }
  

  
  avaliarDesenvolvimentoService(){
    var val =  {             
                  id:this.Id_Desenvolvimento,
                  cliente:this.Cliente_Desenvolvimento,
                  usuario:this.Usuario_Desenvolvimento,
                  motivo:this.Motivo_Desenvolvimento,
                  avaliacao:this.value,
                  data:this.Data_Desenvolvimento
              };
    this.service.updateDesenvolvimentoService(val).subscribe(res=>{
      alert("Avaliado com sucesso!");
    },  
    error => {alert("Erro ao salvar,revise as informações preenchidas.")
    });
  }


  filtroUsuarioDesenvolvimento(){
    var UsuarioNomeFiltro:string = "" + this.Usuario_Desenvolvimento;
    this.DesenvolvimentosLista = this.DesenvolvimentosListaSemFiltro.filter(function (el:any){
        return el.usuario.toString().toLowerCase().includes(
          UsuarioNomeFiltro.toString().trim().toLowerCase()
        )
    });
  }



  geraRelatorio(){
 
  } 
  refreshDesenvolvimentosLista(){
    this.service.getDesenvolvimentosListaService().subscribe(data=>{
      this.DesenvolvimentosLista=data;
      this.DesenvolvimentosListaSemFiltro=data});
      
  }
}

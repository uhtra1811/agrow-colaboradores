import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as FileSaver from 'file-saver';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-lista-treinamentos',
  templateUrl: './lista-treinamentos.component.html',
  styleUrls: ['./lista-treinamentos.component.css']
})
export class ListaTreinamentosComponent implements OnInit {

  constructor(private service:SharedService, private router: Router) { }

  MostrarAvaliacaoHabilitada:boolean = true
  MostrarAvaliacaoDesabilitada:boolean = true
  
 
  cad:any;
 
  ModalTitle!:string;
  MostraModal:boolean = false;

  TreinamentosLista!:any[];
  TreinamentosListaSemFiltro!:any[];

  Id_TreinamentoFiltro!: string;
  ClienteNomeFiltro:string="";
  UsuarioNomeFiltro:any="";
  MotivoFiltro:string="";
  ContatoFiltro:string="";
  SolucaoFiltro:string="";
  DataFiltro:string="";


  Id_Treinamento!: number;
  Cliente_Treinamento!:string;
  Usuario_Treinamento!:string;
  Nivel_Treinamento!:string;
  Mensagem_Treinamento!:string;
  Solucao_Treinamento!:string;
  Avaliacao_Treinamento:number = 0;
  Data_Treinamento!:string;
  MostraLoading:boolean = true;
  MostrarTabela:boolean = false;
  value: number = 0;

  today:any = new Date();
  dd = String(this.today.getDate()).padStart(2, '0');
  mm = String(this.today.getMonth() + 1).padStart(2, '0'); //Janeiro é 0!
  yyyy = this.today.getFullYear();
  todayis: any = this.today = this.yyyy + '-' + this.mm + '-' + this.dd;


 
  ngOnInit(): void {
    this.UsuarioNomeFiltro = sessionStorage.getItem('usuario');
    this.Usuario_Treinamento = this.UsuarioNomeFiltro;
   
    //this.mostrarTreinamentos();

    this.loading();
    this.mostrarTreinamentos();
    this.refreshTreinamentosLista();
  }

  loading(){
    this.delay(1500).then(any=>{
      this.esconderLoading();
      this.mostrarTabela();
 });
    
    this.refreshTreinamentosLista();
    this.delay(1000).then(any=>{
      this.filtroUsuarioTreinamento();
 });
  }

  esconderLoading(){
    this.MostraLoading = !this.MostraLoading;
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

  mostrarTreinamentos(){
    this.service.getTreinamentosListaService().subscribe(data=>{
      this.TreinamentosLista=data;});

  }
  editaTreinamento(item: any){
    this.cad=item;
    this.Id_Treinamento= this.cad.id
    this.Cliente_Treinamento= this.cad.cliente
    this.Usuario_Treinamento= this.cad.usuario
    this.Nivel_Treinamento= this.cad.nivel
    this.value = this.cad.avaliacao;
    this.Data_Treinamento= this.cad.data
    console.log(this.cad);
    if(this.value > 0){
      this.MostrarAvaliacaoHabilitada = false;
      this.MostrarAvaliacaoDesabilitada = true;

    }else{
      this.MostrarAvaliacaoHabilitada = true;
      this.MostrarAvaliacaoDesabilitada = false;
    }
  
  }
  
  
  avaliarTreinamentoService(){
    var val =  {             
                  id:this.Id_Treinamento,
                  cliente:this.Cliente_Treinamento,
                  usuario:this.Usuario_Treinamento,
                  nivel:this.Nivel_Treinamento,
                  avaliacao:this.value,
                  data:this.Data_Treinamento
              };
    this.service.updateTreinamentoService(val).subscribe(res=>{
      alert("Avaliado com sucesso!");
    },  
    error => {alert("Erro ao salvar,revise as informações preenchidas.")
    });
  }


  filtroUsuarioTreinamento(){
    var UsuarioNomeFiltro:string = "" + this.Usuario_Treinamento;
    this.TreinamentosLista = this.TreinamentosListaSemFiltro.filter(function (el:any){
        return el.usuario.toString().toLowerCase().includes(
          UsuarioNomeFiltro.toString().trim().toLowerCase()
        )
    });
  }

   

  refreshTreinamentosLista(){
    this.service.getTreinamentosListaService().subscribe(data=>{
      this.TreinamentosLista=data;
      this.TreinamentosListaSemFiltro=data});
      
  }





  geraRelatorio(){
    this.service.downloadRelatorioTreinamentosCliente().subscribe(
      (res) => {
        let blob = new Blob([res], { type: 'pdf' });
         FileSaver.saveAs(blob, "Treinamentos.pdf")

    });
  } 
  acionaTrigger(){
    var val1 =  {
      edita:"1"
    };             
     this.service.addRelatorioService(val1).subscribe();

  }
 
  insertRelatorioTreinamento(){

      var val = this.TreinamentosLista
     
      this.service.addTreinamentoRelatorioService(val).subscribe(res=>{
       
      
       
        this.geraRelatorio();
      },  
      error => {alert("Erro ao gerar relatorio")
      });
    }


 
  exportarRelatorio(){
    this.acionaTrigger();
    
    this.delay(1000).then(any=>{
       this.insertRelatorioTreinamento();});
    
  }


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as FileSaver from 'file-saver';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-lista-auditoria',
  templateUrl: './lista-auditoria.component.html',
  styleUrls: ['./lista-auditoria.component.css']
})
export class ListaAuditoriaComponent implements OnInit {
  constructor(private service:SharedService, private router: Router) { }

  MostrarAvaliacaoHabilitada:boolean = true
  MostrarAvaliacaoDesabilitada:boolean = true
  
 
  cad:any;
 
  ModalTitle!:string;
  MostraModal:boolean = false;

  AuditoriasLista!:any[];
  AuditoriasListaSemFiltro!:any[];

  Id_AuditoriaFiltro!: string;
  ClienteNomeFiltro:string="";
  UsuarioNomeFiltro:any="";
  MotivoFiltro:string="";
  ContatoFiltro:string="";
  SolucaoFiltro:string="";
  DataFiltro:string="";


  Id_Auditoria!: number;
  Cliente_Auditoria!:string;
  Usuario_Auditoria!:string;
  Motivo_Auditoria!:string;
  Meiodecontato_Auditoria!:string;
  Mensagem_Auditoria!:string;
  Solucao_Auditoria!:string;
  Avaliacao_Auditoria:number = 0;
  Data_Auditoria!:string;
  MostraLoading:boolean = true;
  MostrarTabela:boolean = false;
  value: number = 0;

  today:any = new Date();
  dd = String(this.today.getDate()).padStart(2, '0');
  mm = String(this.today.getMonth() + 1).padStart(2, '0'); //Janeiro é 0!
  yyyy = this.today.getFullYear();
  todayis: any = this.today = this.yyyy + '-' + this.mm + '-' + this.dd;


 
  ngOnInit(): void {
    this.UsuarioNomeFiltro = localStorage.getItem('usuario');
    this.Usuario_Auditoria = this.UsuarioNomeFiltro;
   
    //this.mostrarAuditorias();

    this.mostrarAuditorias();
    this.refreshAuditoriasLista();
  }

  loading(){
    this.delay(1500).then(any=>{
      this.esconderLoading();
      this.mostrarTabela();
 });
    
    this.refreshAuditoriasLista();
    this.delay(1000).then(any=>{
      this.filtroUsuarioAuditoria();
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

  mostrarAuditorias(){
    this.service.getAuditoriasListaService().subscribe(data=>{
      this.AuditoriasLista=data;});

  }
  editaAuditoria(item: any){
    this.cad=item;
    this.Id_Auditoria= this.cad.id
    this.Cliente_Auditoria= this.cad.cliente
    this.Usuario_Auditoria= this.cad.usuario
    this.Motivo_Auditoria= this.cad.motivo
    this.Meiodecontato_Auditoria= this.cad.meiodecontato
    this.Mensagem_Auditoria= this.cad
    this.Solucao_Auditoria= this.cad.solucao
    this.value = this.cad.avaliacao;
    this.Data_Auditoria= this.cad.data
    console.log(this.cad);
    if(this.value > 0){
      this.MostrarAvaliacaoHabilitada = false;
      this.MostrarAvaliacaoDesabilitada = true;

    }else{
      this.MostrarAvaliacaoHabilitada = true;
      this.MostrarAvaliacaoDesabilitada = false;
    }
  
  }
  

  
  avaliarAuditoriaService(){
    var val =  {             
                  id:this.Id_Auditoria,
                  cliente:this.Cliente_Auditoria,
                  usuario:this.Usuario_Auditoria,
                  motivo:this.Motivo_Auditoria,
                  meiodecontato:this.Meiodecontato_Auditoria,
                  solucao:this.Solucao_Auditoria,
                  avaliacao:this.value,
                //  data:this.Data_Auditoria
              };
    this.service.updateAuditoriaService(val).subscribe(res=>{
      alert("Avaliado com sucesso!");
    },  
    error => {alert("Erro ao salvar,revise as informações preenchidas.")
    });
  }


  filtroUsuarioAuditoria(){
    var UsuarioNomeFiltro:string = "" + this.Usuario_Auditoria;
    this.AuditoriasLista = this.AuditoriasListaSemFiltro.filter(function (el:any){
        return el.usuario.toString().toLowerCase().includes(
          UsuarioNomeFiltro.toString().trim().toLowerCase()
        )
    });
  }



  geraRelatorio(){


  } 
  refreshAuditoriasLista(){
    this.service.getAuditoriasListaService().subscribe(data=>{
      this.AuditoriasLista=data;
      this.AuditoriasListaSemFiltro=data});
      
  }
}

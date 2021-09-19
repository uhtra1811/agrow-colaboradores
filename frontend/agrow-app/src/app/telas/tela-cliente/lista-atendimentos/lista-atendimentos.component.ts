import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as FileSaver from 'file-saver';
import { SharedService } from 'src/app/shared.service';
import { LoginComponent } from 'src/app/admin/login/login.component'

@Component({
  selector: 'app-lista-atendimentos',
  templateUrl: './lista-atendimentos.component.html',
  styleUrls: ['./lista-atendimentos.component.css']
})
export class ListaAtendimentosComponent implements OnInit {

  constructor(private service:SharedService, private router: Router) { }

  MostraAvaliar:boolean = true
 
  cad:any;
 
  ModalTitle!:string;
  MostraModal:boolean = false;

  AtendimentosLista!:any[];
  AtendimentosListaSemFiltro!:any[];

  Id_AtendimentoFiltro!: string;
  ClienteNomeFiltro:string="";
  UsuarioNomeFiltro:any="";
  MotivoFiltro:string="";
  ContatoFiltro:string="";
  SolucaoFiltro:string="";
  DataFiltro:string="";


  Id_Atendimento!: number;
  Cliente_Atendimento!:string;
  Usuario_Atendimento!:string;
  Motivo_Atendimento!:string;
  Meiodecontato_Atendimento!:string;
  Mensagem_Atendimento!:string;
  Solucao_Atendimento!:string;
  Avaliacao_Atendimento:number = 0;
  Data_Atendimento!:string;
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
    this.Usuario_Atendimento = this.UsuarioNomeFiltro;
   
    this.mostrarAtendimentos();

    this.delay(1800).then(any=>{
      this.esconderLoading();
      this.mostrarTabela();
 });
    
    this.refreshAtendimentosLista();
    this.delay(1000).then(any=>{
      this.filtroUsuarioAtendimento();
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

  mostrarAtendimentos(){
    this.service.getAtendimentosLista().subscribe(data=>{
      this.AtendimentosLista=data;});

  }
  editaAtendimento(item: any){
    this.cad=item;
    this.Id_Atendimento= this.cad.id
    this.Cliente_Atendimento= this.cad.cliente
    this.Usuario_Atendimento= this.cad.usuario
    this.Motivo_Atendimento= this.cad.motivo
    this.Meiodecontato_Atendimento= this.cad.meiodecontato
    this.Mensagem_Atendimento= this.cad
    this.Solucao_Atendimento= this.cad.solucao
    this.value = this.cad.avaliacao;
    this.Data_Atendimento= this.cad.data
    console.log(this.cad);
  }
  

  
  avaliarAtendimentoService(){
    var val =  {             
                  id:this.Id_Atendimento,
                  cliente:this.Cliente_Atendimento,
                  usuario:this.Usuario_Atendimento,
                  motivo:this.Motivo_Atendimento,
                  meiodecontato:this.Meiodecontato_Atendimento,
                  solucao:this.Solucao_Atendimento,
                  avaliacao:this.value,
                  data:this.Data_Atendimento
              };
    this.service.updateAtendimento(val).subscribe(res=>{
      alert("Adicionado com sucesso! Data:" + this.Data_Atendimento);
    },  
    error => {alert("Erro ao salvar,revise as informações preenchidas.")
    });
  }

  filtroIdAtendimento(){
    var Id_AtendimentoFiltro:string = "" + this.Id_AtendimentoFiltro;
    this.AtendimentosLista = this.AtendimentosListaSemFiltro.filter(function (el:any){
        return el.id.toString().toLowerCase().includes(
          Id_AtendimentoFiltro.toString()
        )
    });
    console.log(this.AtendimentosLista)
  }

  filtroClienteAtendimento(){
    var ClienteNomeFiltro:string = "" + this.ClienteNomeFiltro;
    this.AtendimentosLista = this.AtendimentosListaSemFiltro.filter(function (el:any){
        return el.cliente.toString().toLowerCase().includes(
          ClienteNomeFiltro.toString().trim().toLowerCase()
        )
    });
  }
  filtroUsuarioAtendimento(){
    var UsuarioNomeFiltro:string = "" + this.UsuarioNomeFiltro;
    this.AtendimentosLista = this.AtendimentosListaSemFiltro.filter(function (el:any){
        return el.usuario.toString().toLowerCase().includes(
          UsuarioNomeFiltro.toString().trim().toLowerCase()
        )
    });
  }
  
  filtroContatoAtendimento(){
    var ContatoFiltro:string = "" + this.ContatoFiltro;
    this.AtendimentosLista = this.AtendimentosListaSemFiltro.filter(function (el:any){
        return el.meiodecontato.toString().toLowerCase().includes(
          ContatoFiltro.toString().trim().toLowerCase()
        )
    });
  }
  filtroMotivoAtendimento(){
    var MotivoFiltro:string = "" + this.MotivoFiltro;
    this.AtendimentosLista = this.AtendimentosListaSemFiltro.filter(function (el:any){
        return el.motivo.toString().toLowerCase().includes(
          MotivoFiltro.toString().trim().toLowerCase()
        )
    });
  }

  filtroSolucaoAtendimento(){
    var SolucaoFiltro:string = "" + this.SolucaoFiltro;
    this.AtendimentosLista = this.AtendimentosListaSemFiltro.filter(function (el:any){
        return el.solucao.toString().toLowerCase().includes(
          SolucaoFiltro.toString().trim().toLowerCase()
        )
    });
  }
  filtroDataAtendimento(){
    var DataFiltro:string = "" + this.DataFiltro;
    this.AtendimentosLista = this.AtendimentosListaSemFiltro.filter(function (el:any){
        return el.data.toString().toLowerCase().includes(
          DataFiltro.toString().trim().toLowerCase()
        )
    });
  }



  geraRelatorio(){
    this.service.download().subscribe(
      (res) => {
        let blob = new Blob([res], { type: 'pdf' });
         FileSaver.saveAs(blob, "Atendimentos.pdf")

    });
  } 
  refreshAtendimentosLista(){
    this.service.getAtendimentosLista().subscribe(data=>{
      this.AtendimentosLista=data;
      this.AtendimentosListaSemFiltro=data});
      
  }

  closeClick(){
    
  }
}

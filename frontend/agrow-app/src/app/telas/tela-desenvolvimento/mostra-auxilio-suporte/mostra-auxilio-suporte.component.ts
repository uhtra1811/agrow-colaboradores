import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import * as FileSaver from 'file-saver';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-mostra-auxilio-suporte',
  templateUrl: './mostra-auxilio-suporte.component.html',
  styleUrls: ['./mostra-auxilio-suporte.component.css']
})
export class MostraAuxilioSuporteComponent implements OnInit {


  constructor(private service:SharedService, private router: Router) { }

  cad:any;

  ModalTitle!:string;
  MostraModal:boolean = false;

  AtendimentosLista!:any[];
  AtendimentosListaSemFiltro!:any[];

  Id_AtendimentoFiltro!: string;
  ClienteNomeFiltro:string="";
  UsuarioNomeFiltro:string="";
  MotivoFiltro:string="";
  ContatoFiltro:string="";
  SolucaoFiltro:string="";
  AuxilioFiltro:string="Sim";
  AvaliacaoFiltro:string="";
  AtendenteFiltro:string="";
  DataFiltro:string="";


  Id_Atendimento!: number;
  Cliente_Atendimento!:string;
  Usuario_Atendimento!:string;
  Motivo_Atendimento!:string;
  Meiodecontato_Atendimento!:string;
  Mensagem_Atendimento!:string;
  Solucao_Atendimento!:string;
  Minutos_Atendimento!:string;
  Auxilio_Atendimento!:string;
  Data_Atendimento!:string;
 
  value:number = 0;

  MostraLoading:boolean = true;
  MostrarTabela:boolean = false;

  today:any = new Date();
  dd = String(this.today.getDate()).padStart(2, '0');
  mm = String(this.today.getMonth() + 1).padStart(2, '0'); //Janeiro é 0!
  yyyy = this.today.getFullYear();
  todayis: any = this.today = this.yyyy + '-' + this.mm + '-' + this.dd;


 
  ngOnInit(): void {
    this.mostrarAtendimentos();
    this.refreshAtendimentosLista();
    this.loading();
  }

  loading(){
    this.delay(1500).then(any=>{
      this.esconderLoading();
      this.mostrarTabela();
 });
    
    this.refreshAtendimentosLista();
    this.delay(1000).then(any=>{
      this.filtroAuxilioAtendimento();
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
    this.service.getAtendimentosListaService().subscribe(data=>{
      this.AtendimentosLista=data;
      console.log(data)
    });
    

  }
  editaAtendimento(item: any){
    this.cad=item;
    this.Id_Atendimento= this.cad.id
    this.Cliente_Atendimento= this.cad.cliente
    this.Usuario_Atendimento= this.cad.usuario
    this.Motivo_Atendimento= this.cad.motivo
    this.Meiodecontato_Atendimento= this.cad.meiodecontato
    this.Minutos_Atendimento= this.cad.minutos
    this.Auxilio_Atendimento= this.cad.auxilio
    this.Solucao_Atendimento= this.cad.solucao
    this.value = this.cad.avaliacao
    this.Data_Atendimento= this.cad.data
  }
  

  editarAtendimentoService(){
      var val =  {
                  id:this.Id_Atendimento,
                  cliente:this.Cliente_Atendimento,
                  usuario:this.Usuario_Atendimento,
                  motivo:this.Motivo_Atendimento,
                  meiodecontato:this.Meiodecontato_Atendimento,
                  solucao:this.Solucao_Atendimento,
                  avaliacao:this.value,
                  atendente:sessionStorage.getItem('usuario'),
                  minutos:this.Minutos_Atendimento,
                  data:this.Data_Atendimento
                }
      this.service.updateAtendimentoService(val).subscribe(res=>{
        alert("Editado com sucesso!");
        this.ngOnInit();
      },  
      error => {alert("Erro ao salvar,revise as informações preenchidas.")
      });
    }
  
    deletarAtendimento(item: any){
      if(confirm('Deseja deletar?')){
        this.service.deleteAtendimentoService(item.id).subscribe(data=>{
          alert("Deletado com sucesso");
       this.refreshAtendimentosLista(); }, 
        error => {alert("Erro ao deletar!");
        });
      }
    }
  
  
  filtroIdAtendimento(){
    var Id_AtendimentoFiltro:string = "" + this.Id_AtendimentoFiltro;
    this.AtendimentosLista = this.AtendimentosListaSemFiltro.filter(function (el:any){
        return el.id.toString().toLowerCase().includes(
          Id_AtendimentoFiltro.toString().trim().toLowerCase()
        )
    });
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

  filtroAvaliacaoAtendimento(){
    var AvaliacaoFiltro:string = "" + this.AvaliacaoFiltro;
    this.AtendimentosLista = this.AtendimentosListaSemFiltro.filter(function (el:any){
        return el.avaliacao.toString().toLowerCase().includes(
          AvaliacaoFiltro.toString().trim().toLowerCase()
        )
    });
  }
  filtroAtendenteAtendimento(){
    var AtendenteFiltro:string = "" + this.AtendenteFiltro;
    this.AtendimentosLista = this.AtendimentosListaSemFiltro.filter(function (el:any){
        return el.atendente.toString().toLowerCase().includes(
          AtendenteFiltro.toString().trim().toLowerCase()
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
  filtroAuxilioAtendimento(){
    var AuxilioFiltro:string = "" + this.AuxilioFiltro;
    this.AtendimentosLista = this.AtendimentosListaSemFiltro.filter(function (el:any){
        return el.auxilio.toString().toLowerCase().includes(
          AuxilioFiltro.toString().trim().toLowerCase()
        )
    });
  }


  geraRelatorio(){
    this.service.downloadService().subscribe(
      (res) => {
        let blob = new Blob([res], { type: 'pdf' });
         FileSaver.saveAs(blob, "Atendimentos.pdf")

    });
  } 
  refreshAtendimentosLista(){
    this.service.getAtendimentosListaService().subscribe(data=>{
      this.AtendimentosLista=data;
      this.AtendimentosListaSemFiltro=data});
  }

  closeClick(){
    
  }
}

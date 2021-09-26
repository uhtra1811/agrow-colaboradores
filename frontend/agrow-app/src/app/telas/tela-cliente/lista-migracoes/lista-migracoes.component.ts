import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as FileSaver from 'file-saver';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-lista-migracoes',
  templateUrl: './lista-migracoes.component.html',
  styleUrls: ['./lista-migracoes.component.css']
})
export class ListaMigracoesComponent implements OnInit {

  constructor(private service:SharedService, private router: Router) { }

  MostrarAvaliacaoHabilitada:boolean = true
  MostrarAvaliacaoDesabilitada:boolean = true
  
 
  cad:any;
 
  ModalTitle!:string;
  MostraModal:boolean = false;

  MigracoesLista!:any[];
  MigracoesListaSemFiltro!:any[];

  Id_MigracaoFiltro!: string;
  ClienteNomeFiltro:string="";
  UsuarioNomeFiltro:any="";
  MotivoFiltro:string="";
  ContatoFiltro:string="";
  SolucaoFiltro:string="";
  DataFiltro:string="";


  Id_Migracao!: number;
  Cliente_Migracao!:string;
  Usuario_Migracao!:string;
  Motivo_Migracao!:string;
  Meiodecontato_Migracao!:string;
  Mensagem_Migracao!:string;
  Solucao_Migracao!:string;
  Avaliacao_Migracao:number = 0;
  Data_Migracao!:string;
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
    this.Usuario_Migracao = this.UsuarioNomeFiltro;
   
    //this.mostrarMigracaos();

    this.loading();
    this.mostrarMigracoes();
    this.refreshMigracoesLista();
  }

  loading(){
    this.delay(1500).then(any=>{
      this.esconderLoading();
      this.mostrarTabela();
 });
    
    this.refreshMigracoesLista();
    this.delay(1000).then(any=>{
      this.filtroUsuarioMigracao();
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

  mostrarMigracoes(){
    this.service.getMigracoesListaService().subscribe(data=>{
      this.MigracoesLista=data;});

  }
  editaMigracao(item: any){
    this.cad=item;
    this.Id_Migracao= this.cad.id
    this.Cliente_Migracao= this.cad.cliente
    this.Usuario_Migracao= this.cad.usuario
    this.Motivo_Migracao= this.cad.motivo
    this.Meiodecontato_Migracao= this.cad.meiodecontato
    this.Mensagem_Migracao= this.cad
    this.Solucao_Migracao= this.cad.solucao
    this.value = this.cad.avaliacao;
    this.Data_Migracao= this.cad.data
    console.log(this.cad);
    if(this.value > 0){
      this.MostrarAvaliacaoHabilitada = false;
      this.MostrarAvaliacaoDesabilitada = true;

    }else{
      this.MostrarAvaliacaoHabilitada = true;
      this.MostrarAvaliacaoDesabilitada = false;
    }
  
  }
  

  
  avaliarMigracaoService(){
    var val =  {             
                  id:this.Id_Migracao,
                  cliente:this.Cliente_Migracao,
                  usuario:this.Usuario_Migracao,
                  motivo:this.Motivo_Migracao,
                  meiodecontato:this.Meiodecontato_Migracao,
                  solucao:this.Solucao_Migracao,
                  avaliacao:this.value,
                //  data:this.Data_Migracao
              };
    this.service.updateMigracaoService(val).subscribe(res=>{
      alert("Avaliado com sucesso!");
    },  
    error => {alert("Erro ao salvar,revise as informações preenchidas.")
    });
  }


  filtroUsuarioMigracao(){
    var UsuarioNomeFiltro:string = "" + this.Usuario_Migracao;
    this.MigracoesLista = this.MigracoesListaSemFiltro.filter(function (el:any){
        return el.usuario.toString().toLowerCase().includes(
          UsuarioNomeFiltro.toString().trim().toLowerCase()
        )
    });
  }



  geraRelatorio(){
    this.service.downloadService().subscribe(
      (res) => {
        let blob = new Blob([res], { type: 'pdf' });
         FileSaver.saveAs(blob, "Migracaos.pdf")

    });
  } 
  refreshMigracoesLista(){
    this.service.getMigracoesListaService().subscribe(data=>{
      this.MigracoesLista=data;
      this.MigracoesListaSemFiltro=data});
      
  }

}

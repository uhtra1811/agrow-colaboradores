import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit, OnChanges{

  constructor(private service:SharedService) { }


  change:boolean = false;
  cli:any;
  
  Id_Usuario!:number;
  Id_UsuarioFiltro!:string;


  Usuario!:string;
  Senha!:string;
  ListaUsuarios!:any[];
  ListaUsuariosSemFiltro!:any[];

  UsuarioNomeFiltro:string="";
  Email!:string;

  Cliente!:string;
  ClientesLista:any=[];
  ClientesListaSemFiltro:any=[];
  ClienteNomeFiltro:string="";

  AbrirModal:boolean = false;


  ngOnInit(): void {
    this.mostrarUsuarios();
    this.refreshUsuariosLista();
  }

  ngOnChanges(): void {
 
    this.refreshUsuariosLista();
  }

  mostrarUsuarios(){
    this.service.getListaUsuarios().subscribe(data=>{
    this.ListaUsuarios=data;
    });
  }

  abrirModalEditaUsuario(item: any){
    this.cli=item;
    this.Id_Usuario = this.cli.id;
    this.Usuario = this.cli.usuario;
    this.Senha = this.cli.senha;
   // this.AbrirModal = true; 
  }

  updateUsuario(){
    var val = {id:this.Id_Usuario,
               usuario:this.Usuario,
               senha:this.Senha
              };    console.log(val);
    this.service.editUsuario(val).subscribe(res=> alert("Editado com sucesso!"));
    this.refreshUsuariosLista();
  }

  apagaUsuario(val:any){
      if(confirm('Deseja deletar?')){
        this.service.deleteUsuario(val.id).subscribe(res=> alert("Deletado com sucesso!"),
        error=> alert("Erro ao deletar!")
        );
      }
      this.refreshUsuariosLista();
    }
  

  refreshUsuariosLista(){
    this.service.getListaUsuarios().subscribe(data=>{
    this.ListaUsuarios=data;
    this.ListaUsuariosSemFiltro=data;
    }) &&   
      this.service.getListaUsuarios().subscribe(data=>{
      this.ListaUsuarios=data;
      this.ListaUsuariosSemFiltro=data;
    })&&
      this.service.getListaUsuarios().subscribe(data=>{
      this.ListaUsuarios=data;
      this.ListaUsuariosSemFiltro=data;
    });
  }
  

  filtroIdUsuario(){
    var Id_UsuarioFiltro:string = "" + this.Id_UsuarioFiltro;
    this.ListaUsuarios = this.ListaUsuariosSemFiltro.filter(function (el:any){
        return el.id.toString().toLowerCase().includes(
          Id_UsuarioFiltro.toString().trim().toLowerCase()
        )
    });
  }

  filtroUsuario(){
    var UsuarioNomeFiltro:string = "" + this.UsuarioNomeFiltro;
    this.ListaUsuarios = this.ListaUsuariosSemFiltro.filter(function (el:any){
        return el.usuario.toString().toLowerCase().includes(
          UsuarioNomeFiltro.toString().trim().toLowerCase()
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
}

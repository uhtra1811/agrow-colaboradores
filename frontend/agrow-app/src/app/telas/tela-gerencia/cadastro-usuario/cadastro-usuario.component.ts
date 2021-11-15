import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {



    constructor(private  service:SharedService) {}

    Usuario!:string;
    Senha!:string;
    Empresa:string = "-Selecione a Empresa-";
    Permissao:string = "-Selecione o nivel de acesso-";
    ClientesLista:any = [];
    PermissaoLista:any = [];

    ngOnInit(): void {  
      this.refreshClientesLista();
      this.listaPermissao();
    }

    addUsuario(){
      if(this.Empresa === "" || this.Empresa ==="-Selecione a Empresa-" || this.Permissao ==="" || this.Permissao === "-Selecione o nível de acesso-"){
        alert("Preencha todos os campos")}
      else{
      var val = {usuario: this.Usuario,
                 senha: this.Senha,
                 empresa: this.Empresa,
                 permissao: this.Permissao
                };
      this.service.addUsuarioService(val).subscribe(res=>{
        alert("Usuário cadastrado com sucesso!")},
        error => {alert("Erro ao cadastrar")
      });   
      this.Usuario="";
      this.Senha="";       
      this.Empresa="";    
      this.Permissao="";    
    }
    }
    refreshClientesLista(){
      this.service.getClientesListaService().subscribe(data=>{
        this.ClientesLista=data;

      });
      
    }
    listaPermissao(){
      this.PermissaoLista = [
    "Desenvolvimento",
    "Treinamento",
    "Comercial",
    "Diretor",
    "Administrador",
    "Suporte",
    "Cliente"]
  }

}
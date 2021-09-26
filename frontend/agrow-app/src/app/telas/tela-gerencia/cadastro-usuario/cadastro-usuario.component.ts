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
    Empresa!:string;
    Permissao!:string;

    ngOnInit(): void {

    }

    addUsuario(){
      var val = {usuario: this.Usuario,
                 senha: this.Senha,
                 empresa: this.Empresa,
                 permissao: this.Permissao
                };
      this.service.addUsuarioService(val).subscribe(res=>{
        alert("Usuário cadastrado com sucesso!")
      });   
      this.Usuario="";
      this.Senha="";       
      this.Empresa="";    
      
    }
}
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

    ngOnInit(): void {

    }

    addUsuario(){
      var val = {usuario: this.Usuario,
                 senha: this.Senha
                };
      this.service.addUsuario(val).subscribe(res=>{
        alert("Usuário cadastrado com sucesso!")
      });   
      this.Usuario="";
      this.Senha="";             
    }
}
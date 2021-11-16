import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {



    constructor(private  service:SharedService, private router:Router) {}

    Usuario!:string;
    Senha!:string;
    Empresa!:string;
    Permissao:string = "Cliente";
    ClientesLista:any = [];
    PermissaoLista:any = [];

    ngOnInit(): void {  
      this.refreshClientesLista();
    }
    
    addUsuario(){
      var val = {usuario: this.Usuario,
                 senha: this.Senha,
                 empresa: this.Empresa,
                 permissao: this.Permissao
                };
      this.service.addUsuarioService(val).subscribe(res=>{
        alert("Usuário cadastrado com sucesso! Você será redirecionado para fazer o login!"),
        this.addCliente();
        this.router.navigate(['/login']);},
        error => {alert("Erro ao cadastrar")
      });   
      this.Usuario="";
      this.Senha="";        
      this.Permissao="";    
    }

    refreshClientesLista(){
      this.service.getClientesListaService().subscribe(data=>{
        this.ClientesLista=data;

      });
      
    }


  addCliente(){
    var val =  {cliente:this.Empresa,
                validacao:"",
                validar:"1999-01-01",       
                telefone:"",       
                versao:"",
                satisfacao_atendimento:1,
                satisfacao_treinamento:1,
                satisfacao_desenvolvimento:1,
                satisfacao_auditoria:1,
                satisfacao_migracao:1};
    this.service.addClienteService(val).subscribe(res=>{},
    error => {alert("Erro ao salvar,revise as informações preenchidas.")
    });

  }
}
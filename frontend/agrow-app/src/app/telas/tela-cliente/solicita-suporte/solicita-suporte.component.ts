import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/admin/login/login.component'
import { Usuario } from 'src/app/admin/login/usuario';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-solicita-suporte',
  templateUrl: './solicita-suporte.component.html',
  styleUrls: ['./solicita-suporte.component.css']
})
export class SolicitaSuporteComponent implements OnInit {

  Empresa:any ='';
  Usuario:any ='';
  Modulo:string = '';
  Financeiro:boolean = false;
  Rotinas:boolean = false;
  Relatorios:boolean = false;
  Cadastros:boolean = false;
  Motivo:string= '';
  Contato:string='';
  Checkbox:number = 0;
  Token: any = ''; 
  Data_Atendimento:string = '';

  today:any = new Date();
  dd = String(this.today.getDate()).padStart(2, '0');
  mm = String(this.today.getMonth() + 1).padStart(2, '0'); //Janeiro é 0!
  yyyy = this.today.getFullYear();
  todayis: any = this.today = this.yyyy + '-' + this.mm + '-' + this.dd;


  public usuario:Usuario = new Usuario();

  constructor(private service:SharedService, private router: Router ) { }

  ngOnInit(): void {
    this.Data_Atendimento=this.todayis;
  }


  console(){
this.setarModulo();
   this.Token = localStorage.getItem('token')
    console.log(this.Token.token);
   /* console.log(this.Financeiro);
    console.log(this.Rotinas);
    console.log(this.Relatorios);
    console.log(this.Cadastros);*/
  }

  setarModulo(){
    if(this.Financeiro == true){
      this.Modulo = 'Financeiro';
      this.Checkbox = this.Checkbox + 1; 
      this.permitirUmCheckbox();   
      this.Rotinas = false;
      this.Relatorios = false;
      this.Cadastros = false;

    }else if (this.Rotinas == true){
      this.Modulo = 'Rotinas';
      this.Checkbox = this.Checkbox + 1; 
      this.permitirUmCheckbox();   
      this.Financeiro = false;
      this.Relatorios = false;
      this.Cadastros = false;

    }else if (this.Relatorios == true){
      this.Modulo = 'Relatorios';
      this.Checkbox = this.Checkbox + 1; 
      this.permitirUmCheckbox();   
      this.Rotinas = false;
      this.Financeiro = false;
      this.Cadastros = false;
    
    }else if (this.Cadastros == true){
      this.Modulo = 'Cadastros';
      this.Checkbox = this.Checkbox + 1; 
      this.permitirUmCheckbox();  
      this.Rotinas = false;
      this.Relatorios = false;
      this.Financeiro = false;
      }  

    }
    permitirUmCheckbox(){
      if(this.Checkbox > 0){
        this.Financeiro = false;
        this.Rotinas = false;
        this.Relatorios = false;
        this.Cadastros = false;
      }
    }
  
    addAtendimento(){
      this.setarModulo();
      this.Empresa = localStorage.getItem('empresa')
      this.Usuario = localStorage.getItem('usuario')
      var val =  {
                  cliente:this.Empresa,
                  usuario:this.Usuario,
                  motivo:this.Modulo + ' ' + this.Motivo,
                  meiodecontato:'aGrow',
                  solucao:'',
                  avaliacao:'',
                  data:this.Data_Atendimento
                };             
      this.service.addAtendimento(val).subscribe(res=>{
        alert("Adicionado com sucesso! Data:" + this.Data_Atendimento);
      },  
      error => {alert("Erro ao salvar,revise as informações preenchidas.")
      });
        this.Motivo="";
 
    }
  }
  
  
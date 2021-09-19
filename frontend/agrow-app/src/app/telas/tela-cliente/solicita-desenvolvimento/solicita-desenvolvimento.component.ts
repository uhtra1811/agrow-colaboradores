import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-solicita-desenvolvimento',
  templateUrl: './solicita-desenvolvimento.component.html',
  styleUrls: ['./solicita-desenvolvimento.component.css']
})
export class SolicitaDesenvolvimentoComponent implements OnInit {

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


  constructor(private service:SharedService, private router: Router ) { }

  ngOnInit(): void {
    this.Data_Atendimento=this.todayis;
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
  
    addDesenvolvimento(){
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
        alert("Adicionado com sucesso!");
      },  
      error => {alert("Erro ao salvar,revise as informações preenchidas.")
      });
        this.Motivo="";
    
    }
  }
  

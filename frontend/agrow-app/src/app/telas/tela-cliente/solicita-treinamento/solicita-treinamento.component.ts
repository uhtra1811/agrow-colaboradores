import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-solicita-treinamento',
  templateUrl: './solicita-treinamento.component.html',
  styleUrls: ['./solicita-treinamento.component.css']
})
export class SolicitaTreinamentoComponent implements OnInit {

  Empresa:any ='';
  Usuario:any ='';
  Modulo:string = '';
  Basico:boolean = false;
  Avancado:boolean = false;
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
    if(this.Basico == true){
      this.Modulo = 'Basico';
      this.Checkbox = this.Checkbox + 1; 
      this.permitirUmCheckbox();   
      this.Avancado = false;

    }else if (this.Avancado == true){
      this.Modulo = 'Avancado';
      this.Checkbox = this.Checkbox + 1; 
      this.permitirUmCheckbox();   
      this.Basico = false;

    }
  }
    permitirUmCheckbox(){
      if(this.Checkbox > 0){
        this.Basico = false;
        this.Avancado = false;
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
  

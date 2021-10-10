import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/admin/login/login.component'
import { Usuario } from 'src/app/admin/login/usuario';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-solicita-auditoria',
  templateUrl: './solicita-auditoria.component.html',
  styleUrls: ['./solicita-auditoria.component.css']
})
export class SolicitaAuditoriaComponent implements OnInit {

  Empresa:any ='';
  Usuario:any ='';

  Checkbox:number = 0;
  
  Financeiro:boolean = false;
  Rotinas:boolean = false;
  Relatorios:boolean = false;
  Cadastros:boolean = false;
  Produto:boolean = false;

  Modulo:string = '';
  Motivo:string= '';
  Contato:string='';


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



    addAuditoria(){
   
      this.Empresa = sessionStorage.getItem('empresa')
      this.Usuario = sessionStorage.getItem('usuario')
      var val =  {
                  cliente:this.Empresa,
                  usuario:this.Usuario,
                  motivo:this.Modulo + ' ' + this.Motivo,
                  meiodecontato:'aGrow',
                  solucao:'',
                  avaliacao:'',
                  data:this.Data_Atendimento
                };             
      this.service.addAuditoriaService(val).subscribe(res=>{
        alert("Adicionado com sucesso!");
      },  
      error => {alert("Erro ao salvar,revise as informações preenchidas.")
      });
        this.Motivo="";
 
    }
  }
  
  
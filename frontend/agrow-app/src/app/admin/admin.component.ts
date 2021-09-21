import { AfterViewInit, Component, EventEmitter, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  @Input() opened: any = false;
  mostrarMenu: boolean = true;
  token:string = '';
  Permissao:any = '';
  
  Cliente:boolean = false;
  Suporte:boolean = false;
  Desenvolvimento:boolean = false;
  Treinamento:boolean = false;
  Direcao:boolean = false;
  Comercial:boolean = false;

  Tipo_Usuario1:string = '369';
  constructor(private router: Router) {}
 
  ngOnInit(): void {
    //this.Tipo_Usuario = localStorage.getItem('usuario');
    this.definirComponentesVisiveis();

  }

  definirComponentesVisiveis(){
    this.Permissao = localStorage.getItem('permissao');
    //Cliente
    if(this.Permissao === '1'){
      this.Cliente = true;
      this.Suporte = false;
      this.Desenvolvimento = false;
      this.Treinamento = false;
      this.Direcao = false;
      this.Comercial = false;
    }
    //Suporte
    else if (this.Permissao === '2'){
      this.Cliente = false;
      this.Suporte = true;
      this.Desenvolvimento = false;
      this.Treinamento = false;
      this.Direcao = false;
      this.Comercial = false;
    }
    //Desenvolvimento
    else if (this.Permissao === '3'){
      this.Cliente = false;
      this.Suporte = false;
      this.Desenvolvimento = true;
      this.Treinamento = false;
      this.Direcao = false;
      this.Comercial = false;
    }
    //Treinamento
    else if (this.Permissao === '4'){
      this.Cliente = false;
      this.Suporte = false;
      this.Desenvolvimento = false;
      this.Treinamento = true;
      this.Direcao = false;
      this.Comercial = false;
    }
    //Direcao
    else if (this.Permissao === '5'){
      this.Cliente = false;
      this.Suporte = false;
      this.Desenvolvimento = false;
      this.Treinamento = false;
      this.Direcao = true;
      this.Comercial = false;
    }
    //Comercial
    else if (this.Permissao === '6'){
      this.Cliente = false;
      this.Suporte = false;
      this.Desenvolvimento = false;
      this.Treinamento = false;
      this.Direcao = false;
      this.Comercial = true;
    }
    //Administrador
    else if (this.Permissao === '7'){
      this.Cliente = true;
      this.Suporte = true;
      this.Desenvolvimento = true;
      this.Treinamento = true;
      this.Direcao = true;
      this.Comercial = true;
    }
  }
  fazerLogout(){
    this.router.navigate(['login']);
  }

  toggleSidebar(opened: any){
    this.opened= !this.opened;
  } 
  console(){
    localStorage.getItem('permissao');
        this.token = localStorage.token;
        this.Permissao = localStorage.permissao
        console.log(this.Permissao);
  
  }
}


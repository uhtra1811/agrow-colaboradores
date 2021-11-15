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

  Pesquisa:string = "";
  
  @Input() MostraSideBar:any = false;

  constructor(private router: Router) {}
 
  ngOnInit(): void {
    this.definirComponentesVisiveis();

  }

  definirComponentesVisiveis(){
    this.Permissao = sessionStorage.getItem('permissao');
    //Cliente
    if(this.Permissao === 'Cliente'){
      this.Cliente = true;
      this.Suporte = false;
      this.Desenvolvimento = false;
      this.Treinamento = false;
      this.Direcao = false;
      this.Comercial = false;
    }
    //Suporte
    else if (this.Permissao === 'Suporte'){
      this.Cliente = false;
      this.Suporte = true;
      this.Desenvolvimento = false;
      this.Treinamento = false;
      this.Direcao = false;
      this.Comercial = false;
    }
    //Desenvolvimento
    else if (this.Permissao === 'Desenvolvimento'){
      this.Cliente = false;
      this.Suporte = false;
      this.Desenvolvimento = true;
      this.Treinamento = false;
      this.Direcao = false;
      this.Comercial = false;
    }
    //Treinamento
    else if (this.Permissao === 'Treinamento'){
      this.Cliente = false;
      this.Suporte = false;
      this.Desenvolvimento = false;
      this.Treinamento = true;
      this.Direcao = false;
      this.Comercial = false;
    }
    //Direcao
    else if (this.Permissao === 'Direcao'){
      this.Cliente = false;
      this.Suporte = false;
      this.Desenvolvimento = false;
      this.Treinamento = false;
      this.Direcao = true;
      this.Comercial = false;
    }
    //Comercial
    else if (this.Permissao === 'Comercial'){
      this.Cliente = false;
      this.Suporte = false;
      this.Desenvolvimento = false;
      this.Treinamento = false;
      this.Direcao = false;
      this.Comercial = true;
    }
    //Administrador
    else if (this.Permissao === 'Administrador'){
      this.Cliente = true;
      this.Suporte = true;
      this.Desenvolvimento = true;
      this.Treinamento = true;
      this.Direcao = true;
      this.Comercial = true;
    }
  }

  fazerLogout(){
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

  toggleSidebar(opened: any){
    console.log(this.opened)
    if(this.MostraSideBar == false){
      this.abrirSidebar(opened);}
      else{
        this.fecharSidebar(opened);
      }
  } 

  abrirSidebar(opened:any){
    this.MostraSideBar= !this.MostraSideBar;;
    this.delay(100).then(any=>{
      this.opened= !this.opened;
      
    });
  }

  fecharSidebar(opened:any){
    this.opened= !this.opened;
    this.delay(100).then(any=>{
      
      this.MostraSideBar= !this.MostraSideBar;;
      
    });
  }

  async delay(ms: number) {
    await new Promise<void>(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
  }

  pesquisar(){
    this.Pesquisa = this.Pesquisa;
    if (this.Pesquisa == "sup"){
      this.router.navigate(['/admin/solicita-suporte']);
    }else if(this.Pesquisa == "des"){
      this.router.navigate(['/admin/solicita-desenvolvimento']);
    }else if(this.Pesquisa == "tre"){
      this.router.navigate(['/admin/solicita-treinamento']);
    }else if(this.Pesquisa == "mig"){
      this.router.navigate(['/admin/solicita-migracao']);
    }else if(this.Pesquisa == "aud"){
      this.router.navigate(['/admin/solicita-auditoria']);
    }else if(this.Pesquisa == "mosate"){
      this.router.navigate(['/admin/cliente-atendimentos']);
    }else if(this.Pesquisa == "mostre"){
      this.router.navigate(['/admin/cliente-treinamentos']);
    }else if(this.Pesquisa == "mosdes"){
      this.router.navigate(['/admin/cliente-desenvolvimentos']);
    }else if(this.Pesquisa == "mosaud"){
      this.router.navigate(['/admin/cliente-auditorias']);
    }else if(this.Pesquisa == "mosmig"){
      this.router.navigate(['/admin/cliente-migracoes']);
    }else if(this.Pesquisa == "lisrel"){
      this.router.navigate(['/admin/relatorios-agrow']);
    }else if(this.Pesquisa == "cadate"){
      this.router.navigate(['/admin/cadastro-atendimento']);
    }else if(this.Pesquisa == "cadcli"){
      this.router.navigate(['/admin/cadastro-cliente']);
    }else if(this.Pesquisa == "atepen"){
      this.router.navigate(['/admin/lista-atendimentos-pendentes'])
    }else if(this.Pesquisa == "lisate"){
      this.router.navigate(['/admin/lista-atendimentos']);
    }else if(this.Pesquisa == "liscli"){
      this.router.navigate(['/admin/lista-clientes']);
    }else if(this.Pesquisa == "cadusu"){
      this.router.navigate(['/admin/cadastro-usuario']);
    }else if(this.Pesquisa == "lisusu"){
      this.router.navigate(['/admin/lista-usuario']);
    }else if(this.Pesquisa == "cadtre"){
      this.router.navigate(['/admin/cadastro-treinamento']);
    }else if(this.Pesquisa == "listre"){
      this.router.navigate(['/admin/mostra-treinamento']);
    }else if(this.Pesquisa == "auxsup"){
      this.router.navigate(['/admin/mostra-auxilio-suporte']);
    }else if(this.Pesquisa == "lisdes"){
      this.router.navigate(['/admin/mostra-desenvolvimentos']);
    }else if(this.Pesquisa == "lismig"){
      this.router.navigate(['/admin/lista-migracao']);
    }else if(this.Pesquisa == "lisaud"){
      this.router.navigate(['/admin/lista-auditoria']);
    }
  }  
}
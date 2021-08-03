import { Component, OnInit } from '@angular/core';
import { AfterViewInit, EventEmitter} from '@angular/core';
import { AuthService } from 'src/app/admin/login/auth.service';
import { Router } from '@angular/router';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { LoginComponent } from './admin/login/login.component';


interface ArvoreRecursosNode {
  name: string;
  children?: ArvoreRecursosNode[];
}
const TREE_DATA: ArvoreRecursosNode[] = [
  {
    name: 'Suporte',
    children: [
      {name: 'Cadastrar Atendimento'},
      {name: 'Edita Atendimento'},
      {name: 'Cadastrar Cliente'},
      {name: 'Lista de Atendimentos'},
      {name: 'Lista de Clientes'}
    ],
  },{
    name: 'Direção',
    children: [
      {
        name: 'Solicitações',
      },  ],
    },{
    name: 'Treinamento',
    children: [
        {name: 'Cadastrar Treinamentos'},
        {name: 'Lista de Treinamentos'},
      ]
    },
    {
      name: 'Comercial',
      children: [
          {name: 'Cadastrar de Apresentações'},
          {name: 'Lista de Apresentações'},  ]
      },
    
    ];  
interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

    opened = false;
    mostrarMenu: boolean = true;
    mostrarLogin: boolean = false;

    //Arvore de Recursos Expandir
    private _transformer = (node: ArvoreRecursosNode, level: number) => 
    {
      return {
              expandable: !!node.children && node.children.length > 0,
              name: node.name,
              level: level,
              };
    }
    treeControl = new FlatTreeControl<FlatNode>(
        node => node.level, node => node.expandable);
    treeFlattener = new MatTreeFlattener(
        this._transformer, node => node.level, node => node.expandable, node => node.children);
    dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    hasChild = (_: number, node: FlatNode) => node.expandable;

    constructor(private login: LoginComponent, 
                private authService: AuthService, 
                private router: Router) {
                                          this.dataSource.data = TREE_DATA;
                                        }
    
    ngOnInit(): void {
     
    }
  
    fazerLogout(){
      //this.mostrarLogin = !this.mostrarLogin;
      this.mostrarMenu = !this.mostrarMenu;
      this.router.navigate(['login']);
    }
    toggleSidebar(){
      console.log(this.opened);
      this.opened = !this.opened;
    } 
  
  mostraComponente(node: any){
    if(node.name ==='Suporte'){
      this.router.navigate(['/']);
  
    }else if (node.name === 'Cadastrar Atendimento'){ 
      this.router.navigate(['/cadastro-atendimento']);
      this.opened = false;
  
    }else if (node.name === 'Edita Atendimento'){  
      this.router.navigate(['/edita-atendimento']);
      this.opened = false;
    
    }
  }
  
  menuToggle(mostrarMenu: any) {
    console.log("from home", mostrarMenu);
  }

  menuLogin(mostrarLogin: any) {
    console.log("from home", mostrarLogin);
  }
  }
  
  
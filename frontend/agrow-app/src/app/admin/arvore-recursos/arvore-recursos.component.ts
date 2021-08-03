import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, Input, Output} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { Router } from '@angular/router';


interface ArvoreRecursosNode {
  name: string;
  children?: ArvoreRecursosNode[];
}
const TREE_DATA: ArvoreRecursosNode[] = [
  {
    name: 'Suporte',
    children: [
      {name: 'Cadastrar Atendimento'},
      {name: 'Cadastrar Cliente'},
      {name: 'Lista de Atendimentos'},
      {name: 'Lista de Clientes'}
    ],
  },{
    name: 'Direção',
    children: [
      {name: 'Solicitações'},
      {name: 'Cadastro de Usuário'},
      {name: 'Lista de Usuários'}  ],
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
  selector: 'app-arvore-recursos',
  templateUrl: './arvore-recursos.component.html',
  styleUrls: ['./arvore-recursos.component.css']
})

export class ArvoreRecursosComponent{

  @Output() opened = false;
  mostrarMenu: boolean = true;
  mostraArvore: boolean = true;
  

  private _transformer = (node: ArvoreRecursosNode, level: number) => {
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

  constructor(private router: Router) {
    this.dataSource.data = TREE_DATA;
  }
  hasChild = (_: number, node: FlatNode) => node.expandable;
 


mostraComponente(node: any){
  if(node.name ==='Suporte'){
    this.router.navigate(['/']);

  }else if (node.name === 'Cadastrar Atendimento'){ 
    this.router.navigate(['/admin/cadastro-atendimento']);
    this.opened = false;
    console.log(this.opened);
  }else if (node.name === 'Edita Atendimento'){  
    this.router.navigate(['/admin/edita-atendimento']);
    this.opened = false;
  
  }else if (node.name === 'Cadastrar Cliente'){  
    this.router.navigate(['/admin/cadastro-cliente']);
    this.opened = false;
  
  }else if (node.name === 'Lista de Atendimentos'){  
    this.router.navigate(['/admin/lista-atendimentos']);
    this.opened = false;
  
  }else if (node.name === 'Lista de Clientes'){  
    this.router.navigate(['/admin/lista-clientes']);
    this.opened = false;
  
  }else if (node.name === 'Solicitações'){  
    this.router.navigate(['/edita-atendimento']);
    this.opened = false;
  
  }else if (node.name === 'Lista de Treinamentos'){  
    this.router.navigate(['/edita-atendimento']);
    this.opened = false;
  
  }else if (node.name === 'Cadastrar de Apresentações'){  
    this.router.navigate(['/edita-atendimento']);
    this.opened = false;
  
  }else if (node.name === 'Lista de Apresentações'){  
    this.router.navigate(['/edita-atendimento']);
    this.opened = false;
  
  }else if (node.name === 'Cadastro de Usuário'){  
    this.router.navigate(['/admin/cadastro-usuario']);
    this.opened = false;
  
  }else if (node.name === 'Lista de Usuários'){  
    this.router.navigate(['/admin/lista-usuario']);
    this.opened = false;
  
  }
  
}
}

import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, EventEmitter, Input, Output} from '@angular/core';
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
      {
        name: 'Cliente',
        children: [
            {name: 'Solicitar suporte'},
            {name: 'Solicitar desenvolvimento'},
            {name: 'Solicitar treinamento'},
            {name: 'Avaliação'}  ]
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

  opened = false;
  mostrarMenu: boolean = true;
  mostraArvore: boolean = true;
 // @Output() opened:any = new EventEmitter<boolean>();

  @Output() buttonClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  ratingChange: EventEmitter<number> = new EventEmitter<number>();

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
    this.buttonClicked.emit(this.opened);

  }else if (node.name === 'Edita Atendimento'){  
    this.router.navigate(['/admin/edita-atendimento']);
    this.buttonClicked.emit(this.opened);
  
  }else if (node.name === 'Cadastrar Cliente'){  
    this.router.navigate(['/admin/cadastro-cliente']);
    this.buttonClicked.emit(this.opened);
  
  }else if (node.name === 'Lista de Atendimentos'){  
    this.router.navigate(['/admin/lista-atendimentos']);
    this.buttonClicked.emit(this.opened);
  
  }else if (node.name === 'Lista de Clientes'){  
    this.router.navigate(['/admin/lista-clientes']);
    this.buttonClicked.emit(this.opened);
  
  }else if (node.name === 'Solicitações'){  
    this.router.navigate(['/edita-atendimento']);
    this.buttonClicked.emit(this.opened);
  
  }else if (node.name === 'Lista de Treinamentos'){  
    this.router.navigate(['/edita-atendimento']);
    this.buttonClicked.emit(this.opened);
  
  }else if (node.name === 'Cadastrar de Apresentações'){  
    this.router.navigate(['/edita-atendimento']);
    this.buttonClicked.emit(this.opened);
  
  }else if (node.name === 'Lista de Apresentações'){  
    this.router.navigate(['/edita-atendimento']);
    this.buttonClicked.emit(this.opened);
  
  }else if (node.name === 'Cadastro de Usuário'){  
    this.router.navigate(['/admin/cadastro-usuario']);
    this.buttonClicked.emit(this.opened);;
  
  }else if (node.name === 'Lista de Usuários'){  
    this.router.navigate(['/admin/lista-usuario']);
    this.buttonClicked.emit(this.opened);
  
  }
else if (node.name === 'Solicitar suporte'){  
  this.router.navigate(['/admin/solicita-suporte']);
  this.buttonClicked.emit(this.opened);

}
else if (node.name === 'Solicitar desenvolvimento'){  
  this.router.navigate(['/admin/solicita-desenvolvimento']);
  this.buttonClicked.emit(this.opened);

}
else if (node.name ===  'Solicitar treinamento'){  
  this.router.navigate(['/admin/solicita-treinamento']);
  this.buttonClicked.emit(this.opened);

}
else if (node.name ===  'Avaliação'){  
  this.router.navigate(['/admin/avaliacao']);
  this.buttonClicked.emit(this.opened);
}
}
}

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
    name: 'Direção',
     children: 
    [
      {name : 'Cadastros', 
        children: [
          {name: 'Cadastro de Usuário'},
        ]},
      {name: 'Relatórios', 
        children: [
          {name: 'Lista de Usuários'},
          {name: 'Lista de Relatórios aGrow'},  
          {name: 'Lista de Clientes'},
          {name: 'Log de Atualizações aGrow'}    
        ]},  
    ],
  },
 ];
  
interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
}


 @Component({
  selector: 'app-arvore-recursos-direcao',
  templateUrl: './arvore-recursos-direcao.component.html',
  styleUrls: ['./arvore-recursos-direcao.component.css']
})

export class ArvoreRecursosDirecaoComponent{

  opened = false;
  mostrarMenu: boolean = true;
  mostraArvore: boolean = true;
  @Output() buttonClicked: EventEmitter<boolean> = new EventEmitter<boolean>();


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

  constructor(private router: Router) {this.dataSource.data = TREE_DATA;}

  hasChild = (_: number, node: FlatNode) => node.expandable;
 

mostraComponente(node: any){
  if (node.name === 'Cadastrar Cliente'){  
    this.router.navigate(['/admin/cadastro-cliente']);
    this.buttonClicked.emit(this.opened);

  }else if (node.name === 'Lista de Clientes'){  
    this.router.navigate(['/admin/lista-clientes']);
    this.buttonClicked.emit(this.opened);
  
  }else if (node.name === 'Cadastro de Usuário'){  
    this.router.navigate(['/admin/cadastro-usuario']);
    this.buttonClicked.emit(this.opened);;
  
  }else if (node.name === 'Lista de Usuários'){  
    this.router.navigate(['/admin/lista-usuario']);
    this.buttonClicked.emit(this.opened);

  }else if (node.name ===  'Lista de Relatórios aGrow'){  
    this.buttonClicked.emit(this.opened);
    this.router.navigate(['/admin/relatorios-agrow']);
  
  }else if (node.name ===  'Log de Atualizações aGrow'){  
    this.buttonClicked.emit(this.opened);
    this.router.navigate(['/admin/log-atualizacao']);
  }
 }
}
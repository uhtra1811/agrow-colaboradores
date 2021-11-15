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
    name: 'Treinamento',
     children: 
     [{name: 'Cadastros',
       children:[
        {name: 'Cadastrar Cliente'},
        {name: 'Cadastrar Treinamento'}
      ]},
      {name: 'Relatórios',
        children:[
        {name: 'Lista de Treinamentos'},
        {name: 'Lista de Relatórios aGrow'},  
        {name: 'Lista de Clientes'}   
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
  selector: 'app-arvore-recursos-treinamento',
  templateUrl: './arvore-recursos-treinamento.component.html',
  styleUrls: ['./arvore-recursos-treinamento.component.css']
})

export class ArvoreRecursosTreinamentoComponent{

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
  
  }else if (node.name ===  'Cadastrar Treinamento'){  
    this.buttonClicked.emit(this.opened);
    this.router.navigate(['/admin/cadastro-treinamento']);
  
  }else if (node.name ===  'Lista de Treinamentos'){  
  this.buttonClicked.emit(this.opened);
  this.router.navigate(['/admin/mostra-treinamento']);
  
  }else if (node.name ===  'Lista de Relatórios aGrow'){  
  this.buttonClicked.emit(this.opened);
  this.router.navigate(['/admin/relatorios-agrow']);
  }
 }
}
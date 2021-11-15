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
    name: 'Desenvolvimento',
     children: 
    [
      {name: 'Relatórios', 
      children:[
            {name: 'Auxílio ao Suporte'},
            {name: 'Lista de Desenvolvimentos'},
            {name: 'Lista de Clientes'},
            {name: 'Lista de Relatórios aGrow'}
          ],}
    ],
  }
 ];
  
interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
}


 @Component({
  selector: 'app-arvore-recursos-desenvolvimento',
  templateUrl: './arvore-recursos-desenvolvimento.component.html',
  styleUrls: ['./arvore-recursos-desenvolvimento.component.css']
})

export class ArvoreRecursosDesenvolvimentoComponent{

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
  if (node.name === 'Lista de Clientes'){  
    this.router.navigate(['/admin/lista-clientes']);
    this.buttonClicked.emit(this.opened);

  }else if (node.name ===  'Auxílio ao Suporte'){  
    this.buttonClicked.emit(this.opened);
    this.router.navigate(['/admin/mostra-auxilio-suporte']);
  
  }else if (node.name ===  'Lista de Desenvolvimentos'){  
    this.buttonClicked.emit(this.opened);
    this.router.navigate(['/admin/mostra-desenvolvimentos']);

  }else if (node.name ===  'Lista de Relatórios aGrow'){  
    this.buttonClicked.emit(this.opened);
    this.router.navigate(['/admin/relatorios-agrow']);
  }
 }
}
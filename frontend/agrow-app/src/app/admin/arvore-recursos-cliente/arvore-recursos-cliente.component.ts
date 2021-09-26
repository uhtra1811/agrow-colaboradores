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
    name: 'Cliente',
    children: 
    [{name: 'Solicitações',
      children:[
       {name: 'Solicitar Suporte'},
       {name: 'Solicitar Desenvolvimento'},
       {name: 'Solicitar Treinamento'},
       {name: 'Solicitar Auditoria'},
       {name: 'Solicitar Migração'}
     ]},
     {name: 'Relatórios',
       children:[
       {name: 'Lista de Atendimentos'},
       {name: 'Lista de Treinamentos'},
       {name: 'Lista de Desenvolvimento'},
       {name: 'Lista de Auditorias'},
       {name: 'Lista de Migrações'},
       {name: 'Lista de Relatórios aGrow'}
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
  selector: 'app-arvore-recursos-cliente',
  templateUrl: './arvore-recursos-cliente.component.html',
  styleUrls: ['./arvore-recursos-cliente.component.css']
})

export class ArvoreRecursosClienteComponent{

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
  
  if (node.name === 'Solicitar Suporte'){  
    this.router.navigate(['/admin/solicita-suporte']);
    this.buttonClicked.emit(this.opened);  

  }else if (node.name === 'Solicitar Desenvolvimento'){  
    this.buttonClicked.emit(this.opened);
    this.router.navigate(['/admin/solicita-desenvolvimento']);

  }else if (node.name ===  'Solicitar Treinamento'){  
    this.buttonClicked.emit(this.opened);
    this.router.navigate(['/admin/solicita-treinamento']);

  }  else if (node.name ===  'Solicitar Auditoria'){  
    this.buttonClicked.emit(this.opened);
    this.router.navigate(['/admin/solicita-auditoria']);
  
  }else if (node.name ===  'Solicitar Migração'){  
    this.buttonClicked.emit(this.opened);
    this.router.navigate(['/admin/solicita-migracao']);

  }else if (node.name ===  'Lista de Atendimentos'){  
    this.buttonClicked.emit(this.opened);
    this.router.navigate(['/admin/cliente-atendimentos']);

  }else if (node.name ===  'Lista de Desenvolvimento'){  
    this.buttonClicked.emit(this.opened);
    this.router.navigate(['/admin/cliente-desenvolvimentos']);

  }else if (node.name ===  'Lista de Treinamentos'){  
    this.buttonClicked.emit(this.opened);
    this.router.navigate(['/admin/cliente-treinamentos']);
  
  }else if (node.name ===  'Lista de Auditorias'){  
    this.buttonClicked.emit(this.opened);
    this.router.navigate(['/admin/cliente-auditorias']);
  
  }else if (node.name ===  'Lista de Migrações'){  
    this.buttonClicked.emit(this.opened);
    this.router.navigate(['/admin/cliente-migracoes']);
  
  }else if (node.name ===  'Lista de Relatórios aGrow'){  
    this.buttonClicked.emit(this.opened);
    this.router.navigate(['/admin/relatorios-agrow']);
  }
 }
}
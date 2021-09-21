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
     {name: 'Solicitar Tomada de Decisão'}
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
  
  }else if (node.name === 'Solicitar Suporte'){  
    this.router.navigate(['/admin/solicita-suporte']);
    this.buttonClicked.emit(this.opened);  

  }else if (node.name === 'Solicitar Desenvolvimento'){  
    this.buttonClicked.emit(this.opened);
    this.router.navigate(['/admin/solicita-desenvolvimento']);

  }else if (node.name ===  'Solicitar Treinamento'){  
    this.buttonClicked.emit(this.opened);
    this.router.navigate(['/admin/solicita-treinamento']);

  }else if (node.name ===  'Avaliação'){  
    this.buttonClicked.emit(this.opened);
    this.router.navigate(['/admin/avaliacao']);

  }else if (node.name ===  'Meus Atendimentos'){  
    this.buttonClicked.emit(this.opened);
    this.router.navigate(['/admin/cliente-atendimentos']);

  }else if (node.name ===  'Solicitações de Desenvolvimento'){  
    this.buttonClicked.emit(this.opened);
    this.router.navigate(['/admin/cliente-desenvolvimento']);

  }else if (node.name ===  'Meus Treinamentos'){  
    this.buttonClicked.emit(this.opened);
    this.router.navigate(['/admin/cliente-treinamento']);

  }else if (node.name ===  'Solicitar Suporte'){  
    this.buttonClicked.emit(this.opened);
    this.router.navigate(['/admin/solicita-suporte']);

  }else if (node.name ===  'Solicitar Auditoria'){  
    this.buttonClicked.emit(this.opened);
    this.router.navigate(['/admin/solicita-auditoria']);
  
  }else if (node.name ===  'Solicitar Migração'){  
    this.buttonClicked.emit(this.opened);
    this.router.navigate(['/admin/solicita-migracao']);
  }
 }
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-mostra-atendimento',
  templateUrl: './mostra-atendimento.component.html',
  styleUrls: ['./mostra-atendimento.component.css']
})
export class MostraAtendimentoComponent implements OnInit {

  constructor(private service:SharedService, private router: Router) { }
  
  cad:any;
  Nome_Cliente!:string;
  Id_Cliente!: number;
  AtendimentosLista!:any[];
  ModalTitle!:string;

  ngOnInit(): void {
    this.mostrarAtendimentos();
  }
  
  mostrarAtendimentos(){
    this.service.getAtendimentosLista().subscribe(data=>{
      this.AtendimentosLista=data;
      console.log(this.AtendimentosLista);
    });
  }
  closeClick(){
    
  }
}

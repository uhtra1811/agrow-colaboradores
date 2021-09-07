import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-edita-cliente',
  templateUrl: './edita-cliente.component.html',
  styleUrls: ['./edita-cliente.component.css']
})
export class EditaClienteComponent implements OnInit {
  
  @Input() cad:any = [];


  Id_Cliente!:string ;
  Cliente!:string;
  Licencas!:string;
  Versao!:string;
  Telefone!:string;
  Firebird!:string;
  Validacao!:string;


  constructor(private service:SharedService) { }

  ngOnInit(): void { 
  
  }

  updateCliente(){
    var val = {cliente:this.Cliente,
               licencas:this.Licencas,
               versao:this.Versao,
               telefone:this.Telefone,
               firebird:this.Firebird,
               validacao:this.Validacao};
  this.service.updateCliente(val).subscribe(res=>{
      alert("Editado com sucesso!");
    },
  error => {alert("Erro ao editar,revise as informações preenchidas.")
    });
      this.Cliente="";
      this.Licencas="";
      this.Versao="";
      this.Telefone="";
      this.Firebird="";
      this.Validacao="";

  }

  atualizaCadCliente(){
    console.log(this.cad);
}

}

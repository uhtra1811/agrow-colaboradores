import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaGerenciaComponent } from 'src/app/telas/tela-gerencia/tela-gerencia.component';
import { TelaSuporteComponent } from 'src/app/telas/tela-suporte/tela-suporte.component';
import { TelaComercialComponent } from 'src/app/telas/tela-comercial/tela-comercial.component';
import { TelaTreinamentoComponent } from 'src/app/telas/tela-treinamento/tela-treinamento.component';
import { TelaDesenvolvimentoComponent } from 'src/app/telas/tela-desenvolvimento/tela-desenvolvimento.component';
import { TelaClienteComponent } from 'src/app/telas/tela-cliente/tela-cliente.component';
import { CadastroUsuarioComponent } from 'src/app/telas/tela-gerencia/cadastro-usuario/cadastro-usuario.component';
import { CadastroAtendimentoComponent } from 'src/app/telas/tela-suporte/cadastro-atendimento/cadastro-atendimento.component';
import { EditaAtendimentoComponent } from 'src/app/telas/tela-suporte/edita-atendimento/edita-atendimento.component';
import { RegistroAtendimentoComponent } from 'src/app/telas/tela-suporte/registro-atendimento/registro-atendimento.component';
import { EditaClienteComponent } from 'src/app/telas/tela-suporte/edita-cliente/edita-cliente.component';
import { MostraClientesComponent } from 'src/app/telas/tela-suporte/mostra-clientes/mostra-clientes.component';
import { CadastroClienteComponent } from 'src/app/telas/tela-suporte/cadastro-cliente/cadastro-cliente.component';
import { MostraAtendimentoComponent } from 'src/app/telas/tela-suporte/mostra-atendimento/mostra-atendimento.component';
import { TelaInicialComponent } from 'src/app/telas/tela-inicial/tela-inicial.component';
import { TelasComponent } from 'src/app/telas/telas.component';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    TelaGerenciaComponent,
    TelaSuporteComponent,
    TelaComercialComponent,
    TelaTreinamentoComponent,
    TelaDesenvolvimentoComponent,
    TelaClienteComponent,
    CadastroUsuarioComponent,
    CadastroAtendimentoComponent,
    EditaAtendimentoComponent,
    RegistroAtendimentoComponent,
    TelasComponent,
    TelaInicialComponent,
    CadastroClienteComponent,
    MostraAtendimentoComponent,
    EditaClienteComponent,
    MostraClientesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  exports:[
    TelaGerenciaComponent,
    TelaSuporteComponent,
    TelaComercialComponent,
    TelaTreinamentoComponent,
    TelaDesenvolvimentoComponent,
    TelaClienteComponent,
    CadastroUsuarioComponent,
    CadastroAtendimentoComponent,
    EditaAtendimentoComponent,
    RegistroAtendimentoComponent,
    TelasComponent,
    TelaInicialComponent,
    CadastroClienteComponent,
    MostraAtendimentoComponent,
    EditaClienteComponent,
    MostraClientesComponent,
    MatIconModule

  ]
})

export class TelasModule { }

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
import { SolicitaSuporteComponent } from './tela-cliente/solicita-suporte/solicita-suporte.component';
import { SolicitaDesenvolvimentoComponent } from './tela-cliente/solicita-desenvolvimento/solicita-desenvolvimento.component';
import { SolicitaTreinamentoComponent } from './tela-cliente/solicita-treinamento/solicita-treinamento.component';
import {MatSliderModule} from '@angular/material/slider'; 
import { NgRatingBarModule } from 'ng-rating-bar';
import { ListaAtendimentosComponent } from './tela-cliente/lista-atendimentos/lista-atendimentos.component';
import { ListaDesenvolvimentosComponent } from './tela-cliente/lista-desenvolvimentos/lista-desenvolvimentos.component';
import { ListaTreinamentosComponent } from './tela-cliente/lista-treinamentos/lista-treinamentos.component';
import { Usuario } from '../admin/login/usuario';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SolicitaAuditoriaComponent } from './tela-cliente/solicita-auditoria/solicita-auditoria.component';
import { SolicitaMigracaoComponent } from './tela-cliente/solicita-migracao/solicita-migracao.component';
import { ListaMigracoesComponent } from './tela-cliente/lista-migracoes/lista-migracoes.component';
import { ListaAuditoriasComponent } from './tela-cliente/lista-auditorias/lista-auditorias.component';
import { ListaRelatoriosAgrowComponent } from './lista-relatorios-agrow/lista-relatorios-agrow.component';
import { CadastroTreinamentoComponent } from './tela-treinamento/cadastro-treinamento/cadastro-treinamento.component';
import { MostraTreinamentoComponent } from './tela-treinamento/mostra-treinamento/mostra-treinamento.component';
import { MostraAuxilioSuporteComponent } from './tela-desenvolvimento/mostra-auxilio-suporte/mostra-auxilio-suporte.component';
import { MostraDesenvolvimentosComponent } from './tela-desenvolvimento/mostra-desenvolvimentos/mostra-desenvolvimentos.component';
import { ListaMigracaoComponent } from './tela-comercial/lista-migracao/lista-migracao.component';
import { ListaAuditoriaComponent } from './tela-comercial/lista-auditoria/lista-auditoria.component';
import { MostraAtendimentoPendenteComponent } from './tela-suporte/mostra-atendimento-pendente/mostra-atendimento-pendente.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { LogAtualizacaoComponent } from './log-atualizacao/log-atualizacao.component';
import { CadastraLogAtualizacaoComponent } from './tela-desenvolvimento/cadastra-log-atualizacao/cadastra-log-atualizacao.component';

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
    RegistroAtendimentoComponent,
    TelasComponent,
    TelaInicialComponent,
    CadastroClienteComponent,
    MostraAtendimentoComponent,
    EditaClienteComponent,
    MostraClientesComponent,
    SolicitaSuporteComponent,
    SolicitaDesenvolvimentoComponent,
    SolicitaTreinamentoComponent,
    ListaAtendimentosComponent,
    ListaDesenvolvimentosComponent,
    ListaTreinamentosComponent,
    SolicitaAuditoriaComponent,
    SolicitaMigracaoComponent,
    ListaMigracoesComponent,
    ListaAuditoriasComponent,
    ListaRelatoriosAgrowComponent,
    CadastroTreinamentoComponent,
    MostraTreinamentoComponent,
    MostraAuxilioSuporteComponent,
    MostraDesenvolvimentosComponent,
    ListaMigracaoComponent,
    ListaAuditoriaComponent,
    MostraAtendimentoPendenteComponent,
    CadastroClientesComponent,
    LogAtualizacaoComponent,
    CadastraLogAtualizacaoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSliderModule,
    NgRatingBarModule,
    MatProgressSpinnerModule
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

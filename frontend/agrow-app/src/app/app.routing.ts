import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./admin/login/login.component";
import { AdminComponent } from "./admin/admin.component";
import { CadastroClienteComponent } from "./telas/tela-suporte/cadastro-cliente/cadastro-cliente.component";
import { CadastroAtendimentoComponent } from "./telas/tela-suporte/cadastro-atendimento/cadastro-atendimento.component";
import { MostraAtendimentoComponent } from "./telas/tela-suporte/mostra-atendimento/mostra-atendimento.component";
import { MostraClientesComponent } from "./telas/tela-suporte/mostra-clientes/mostra-clientes.component";
import { CadastroUsuarioComponent } from "./telas/tela-gerencia/cadastro-usuario/cadastro-usuario.component";
import { ListaUsuarioComponent } from "./telas/tela-gerencia/lista-usuario/lista-usuario.component";
import { SolicitaSuporteComponent } from "./telas/tela-cliente/solicita-suporte/solicita-suporte.component";
import { SolicitaDesenvolvimentoComponent } from "./telas/tela-cliente/solicita-desenvolvimento/solicita-desenvolvimento.component";
import { SolicitaTreinamentoComponent } from "./telas/tela-cliente/solicita-treinamento/solicita-treinamento.component";
import { ListaAtendimentosComponent } from "./telas/tela-cliente/lista-atendimentos/lista-atendimentos.component";
import { SolicitaAuditoriaComponent } from "./telas/tela-cliente/solicita-auditoria/solicita-auditoria.component";
import { SolicitaMigracaoComponent } from "./telas/tela-cliente/solicita-migracao/solicita-migracao.component";
import { ListaDesenvolvimentosComponent } from "./telas/tela-cliente/lista-desenvolvimentos/lista-desenvolvimentos.component";
import { ListaTreinamentosComponent } from "./telas/tela-cliente/lista-treinamentos/lista-treinamentos.component";
import { ListaAuditoriasComponent } from "./telas/tela-cliente/lista-auditorias/lista-auditorias.component";
import { ListaMigracoesComponent } from "./telas/tela-cliente/lista-migracoes/lista-migracoes.component";
import { ListaRelatoriosAgrowComponent } from "./telas/lista-relatorios-agrow/lista-relatorios-agrow.component";
import { CadastroTreinamentoComponent } from "./telas/tela-treinamento/cadastro-treinamento/cadastro-treinamento.component";
import { MostraTreinamentoComponent } from "./telas/tela-treinamento/mostra-treinamento/mostra-treinamento.component";
import { MostraDesenvolvimentosComponent } from "./telas/tela-desenvolvimento/mostra-desenvolvimentos/mostra-desenvolvimentos.component";
import { MostraAuxilioSuporteComponent } from "./telas/tela-desenvolvimento/mostra-auxilio-suporte/mostra-auxilio-suporte.component";
import { ListaMigracaoComponent } from "./telas/tela-comercial/lista-migracao/lista-migracao.component";
import { ListaAuditoriaComponent } from "./telas/tela-comercial/lista-auditoria/lista-auditoria.component";
import { MostraAtendimentoPendenteComponent } from "./telas/tela-suporte/mostra-atendimento-pendente/mostra-atendimento-pendente.component";
import { AuthGuardSuporte } from "./guards/auth-suporte.guard";
import { AuthGuardTreinamento } from "./guards/auth-treinamento.guard";
import { AuthGuardCliente } from "./guards/auth-cliente.guard";
import { AuthGuardDirecao } from "./guards/auth-direcao.guard";
import { AuthGuardDesenvolvimento } from "./guards/auth-desenvolvimento.guard";
import { AuthGuardComercial } from "./guards/auth-comercial.guard";
import { AuthGuardListaCliente } from "./guards/auth-lista-cliente.guard";
import { AuthGuardAdmin } from "./guards/auth-admin.guard";
import { CadastroClientesComponent } from "./telas/cadastro-clientes/cadastro-clientes.component";
import { LogAtualizacaoComponent } from "./telas/log-atualizacao/log-atualizacao.component";
import { CadastraLogAtualizacaoComponent } from "./telas/tela-desenvolvimento/cadastra-log-atualizacao/cadastra-log-atualizacao.component";



  const APP_ROUTES: Routes = [ 
      {path: '', component: LoginComponent},
      {path: 'cadastro-usuario-cliente', component: CadastroClientesComponent},
      {path: 'login', component: LoginComponent},
      {path: 'admin', component: AdminComponent, canActivate:[AuthGuardAdmin], children: [

      {path: 'solicita-suporte', component: SolicitaSuporteComponent,
        canActivate:[AuthGuardCliente]},
      {path: 'solicita-desenvolvimento', component: SolicitaDesenvolvimentoComponent,
        canActivate:[AuthGuardCliente]},
      {path: 'solicita-treinamento', component: SolicitaTreinamentoComponent,
        canActivate:[AuthGuardCliente]},
      {path: 'cliente-atendimentos', component: ListaAtendimentosComponent,
        canActivate:[AuthGuardCliente]},
      {path: 'solicita-auditoria', component: SolicitaAuditoriaComponent,
        canActivate:[AuthGuardCliente]},
      {path: 'solicita-migracao', component: SolicitaMigracaoComponent,
        canActivate:[AuthGuardCliente]},
      {path: 'cliente-desenvolvimentos', component: ListaDesenvolvimentosComponent,
        canActivate:[AuthGuardCliente]},
      {path: 'cliente-treinamentos', component: ListaTreinamentosComponent,
        canActivate:[AuthGuardCliente]},
      {path: 'cliente-migracoes', component: ListaMigracoesComponent,
        canActivate:[AuthGuardCliente]},
      {path: 'cliente-auditorias', component: ListaAuditoriasComponent,
        canActivate:[AuthGuardCliente]},
 
      {path: 'lista-atendimentos-pendentes', component: MostraAtendimentoPendenteComponent,
        canActivate:[AuthGuardSuporte]},
      {path: 'cadastro-atendimento', component: CadastroAtendimentoComponent,
        canActivate: [AuthGuardSuporte]},
    
      {path: 'lista-atendimentos', component: MostraAtendimentoComponent,
        canActivate:[AuthGuardSuporte]},
  
      {path: 'cadastro-usuario', component: CadastroUsuarioComponent,
        canActivate:[AuthGuardDirecao]},
      {path: 'lista-usuario', component: ListaUsuarioComponent,
        canActivate:[AuthGuardDirecao]},
  
      {path: 'mostra-desenvolvimentos', component: MostraDesenvolvimentosComponent,
        canActivate:[AuthGuardDesenvolvimento]},
      {path: 'mostra-auxilio-suporte', component: MostraAuxilioSuporteComponent,
        canActivate:[AuthGuardDesenvolvimento]},
        {path: 'cadastra-log-atualizacao', component: CadastraLogAtualizacaoComponent,
        canActivate:[AuthGuardDesenvolvimento]},

      {path: 'cadastro-treinamento', component: CadastroTreinamentoComponent,
        canActivate: [AuthGuardTreinamento]},
      {path: 'mostra-treinamento', component: MostraTreinamentoComponent,
        canActivate:[AuthGuardTreinamento]},

      {path: 'lista-migracao', component: ListaMigracaoComponent,
        canActivate:[AuthGuardComercial]},
      {path: 'lista-auditoria', component: ListaAuditoriaComponent,
        canActivate:[AuthGuardComercial]},

      {path: 'cadastro-cliente', component: CadastroClienteComponent,
        canActivate:[AuthGuardListaCliente] },
      {path: 'lista-clientes', component: MostraClientesComponent,
        canActivate:[AuthGuardListaCliente]},
      {path: 'relatorios-agrow', component: ListaRelatoriosAgrowComponent,
        canActivate:[AuthGuardAdmin]},
        {path: 'log-atualizacao', component: LogAtualizacaoComponent,
        canActivate:[AuthGuardAdmin]}
      ]}
  ];
  export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);

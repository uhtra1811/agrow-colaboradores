import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./admin/login/login.component";
import { AdminComponent } from "./admin/admin.component";
import { CadastroClienteComponent } from "./telas/tela-suporte/cadastro-cliente/cadastro-cliente.component";
import { EditaClienteComponent } from "./telas/tela-suporte/edita-cliente/edita-cliente.component";
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


  const APP_ROUTES: Routes = [ 
      {path: '', component: LoginComponent},
      {path: 'login', component: LoginComponent},
      {path: 'admin', component: AdminComponent, children: [
        {path: 'cadastro-atendimento', component: CadastroAtendimentoComponent},
        {path: 'cadastro-cliente', component: CadastroClienteComponent },
        {path: 'lista-atendimentos', component: MostraAtendimentoComponent},
        {path: 'lista-clientes', component: MostraClientesComponent},
        {path: 'edita-cliente', component: EditaClienteComponent},
        {path: 'mostra-atendimento', component: MostraAtendimentoComponent},
        {path: 'cadastro-usuario', component: CadastroUsuarioComponent},
        {path: 'lista-usuario', component: ListaUsuarioComponent},
        {path: 'solicita-suporte', component: SolicitaSuporteComponent},
        {path: 'solicita-desenvolvimento', component: SolicitaDesenvolvimentoComponent},
        {path: 'solicita-treinamento', component: SolicitaTreinamentoComponent},
        {path: 'cliente-atendimentos', component: ListaAtendimentosComponent},
        {path: 'solicita-auditoria', component: SolicitaAuditoriaComponent},
        {path: 'solicita-migracao', component: SolicitaMigracaoComponent},
        {path: 'cliente-desenvolvimentos', component: ListaDesenvolvimentosComponent},
        {path: 'cliente-treinamentos', component: ListaTreinamentosComponent},
        {path: 'cliente-migracoes', component: ListaMigracoesComponent},
        {path: 'cliente-auditorias', component: ListaAuditoriasComponent},
        {path: 'relatorios-agrow', component: ListaRelatoriosAgrowComponent},
        {path: 'cadastro-treinamento', component: CadastroTreinamentoComponent},
        {path: 'mostra-treinamento', component: MostraTreinamentoComponent},
        {path: 'cadastro-treinamento', component: CadastroTreinamentoComponent},
        {path: 'mostra-treinamento', component: MostraTreinamentoComponent},
        {path: 'mostra-desenvolvimentos', component: MostraDesenvolvimentosComponent},
        {path: 'mostra-auxilio-suporte', component: MostraAuxilioSuporteComponent},
        {path: 'lista-migracao', component: ListaMigracaoComponent},
        {path: 'lista-auditoria', component: ListaAuditoriaComponent}
      ]}
  
  ];
  
  export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);

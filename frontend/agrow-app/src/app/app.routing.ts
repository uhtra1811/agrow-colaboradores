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
        {path: 'solicita-treinamento', component: SolicitaTreinamentoComponent}
      ]}
  
  ];
  
  export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);

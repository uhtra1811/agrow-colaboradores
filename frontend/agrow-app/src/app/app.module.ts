import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';
import { ArvoreRecursosComponent } from './admin/arvore-recursos/arvore-recursos.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AuthService } from './admin/login/auth.service';
import { routing } from './app.routing';
import {MatTreeModule} from '@angular/material/tree';
import { SidebarModule } from 'ng-sidebar';
import {MatButtonModule} from '@angular/material/button';
import {  HttpClientModule } from '@angular/common/http';
import { TelasModule } from './telas/telas.module';
import { FormsModule } from '@angular/forms';
import { ListaUsuarioComponent } from './telas/tela-gerencia/lista-usuario/lista-usuario.component';
import { ArvoreRecursosClienteComponent } from './admin/arvore-recursos-cliente/arvore-recursos-cliente.component';
import { ArvoreRecursosSuporteComponent } from './admin/arvore-recursos-suporte/arvore-recursos-suporte.component';
import { ArvoreRecursosTreinamentoComponent } from './admin/arvore-recursos-treinamento/arvore-recursos-treinamento.component';
import { ArvoreRecursosDirecaoComponent } from './admin/arvore-recursos-direcao/arvore-recursos-direcao.component';
import { ArvoreRecursosDesenvolvimentoComponent } from './admin/arvore-recursos-desenvolvimento/arvore-recursos-desenvolvimento.component';
import { ArvoreRecursosComercialComponent } from './admin/arvore-recursos-comercial/arvore-recursos-comercial.component';
import { AuthGuardSuporte } from './guards/auth-suporte.guard';
import { AuthGuardDesenvolvimento } from './guards/auth-desenvolvimento.guard';
import { AuthGuardCliente } from './guards/auth-cliente.guard';
import { AuthGuardTreinamento } from './guards/auth-treinamento.guard';
import { AuthGuardDirecao } from './guards/auth-direcao.guard';
import { AuthGuardComercial } from './guards/auth-comercial.guard';
import { AuthGuardListaCliente } from './guards/auth-lista-cliente.guard';
import { AuthGuardAdmin } from './guards/auth-admin.guard';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    ArvoreRecursosComponent,
    ListaUsuarioComponent,
    ArvoreRecursosClienteComponent,
    ArvoreRecursosSuporteComponent,
    ArvoreRecursosTreinamentoComponent,
    ArvoreRecursosDirecaoComponent,
    ArvoreRecursosDesenvolvimentoComponent,
    ArvoreRecursosComercialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatTreeModule,
    routing,
    SidebarModule.forRoot(),
    MatButtonModule,
    HttpClientModule,
    TelasModule,
    FormsModule
  ],
  exports:[
    MatToolbarModule,
    MatIconModule,
    AdminComponent
  ],
  providers: [AuthService, 
              AuthGuardSuporte,
              AuthGuardCliente,
              AuthGuardDesenvolvimento,
              AuthGuardTreinamento,
              AuthGuardDirecao,
              AuthGuardComercial,
              AuthGuardListaCliente,
              AuthGuardAdmin],
  bootstrap: [AppComponent]
})
export class AppModule { }

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


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    ArvoreRecursosComponent,
    ListaUsuarioComponent
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
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

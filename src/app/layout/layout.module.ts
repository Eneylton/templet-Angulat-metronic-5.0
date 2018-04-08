import { CadastroModule } from './../cadastro/cadastro.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopoComponent } from './topo/topo.component';
import { MenuComponent } from './menu/menu.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { FooterComponent } from './footer/footer.component';
import { PesquisarModule } from '../pesquisar/pesquisar.module';

@NgModule({
  imports: [
    CommonModule,
    CadastroModule,
    PesquisarModule
  ],
  declarations: [TopoComponent, MenuComponent, ConteudoComponent, FooterComponent],
  exports:[TopoComponent,MenuComponent,ConteudoComponent, FooterComponent]
})
export class LayoutModule { }

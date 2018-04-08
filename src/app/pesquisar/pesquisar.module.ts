import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoPesquisarComponent } from './aluno-pesquisar/aluno-pesquisar.component';
import { DataTableModule } from 'primeng/components/datatable/datatable';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule

  ],
  declarations: [AlunoPesquisarComponent],
  exports:[AlunoPesquisarComponent]

})
export class PesquisarModule { }

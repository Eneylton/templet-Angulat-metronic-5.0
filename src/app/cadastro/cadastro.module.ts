import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CadastroAlunoComponent],
  exports:[CadastroAlunoComponent]
})
export class CadastroModule { }

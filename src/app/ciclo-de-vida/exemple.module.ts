import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CicloDeVidaComponent } from './ciclo-de-vida.component';
import { BrigadeiroComponent } from './brigadeiro.component';
import { CicloRoutingModule } from './ciclo-de-vida.router';

@NgModule({
  imports: [
    CommonModule,
    CicloRoutingModule
  ],
  declarations: [
    CicloDeVidaComponent,
    BrigadeiroComponent
  ],
  exports: [
    CicloDeVidaComponent,
    BrigadeiroComponent
  ]
})
export class ExempleModule {}
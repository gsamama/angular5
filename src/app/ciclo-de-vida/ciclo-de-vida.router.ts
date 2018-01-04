import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CicloDeVidaComponent } from './ciclo-de-vida.component';
import { BrigadeiroComponent } from './brigadeiro.component';

const routes: Routes = [
  {
    path: '', component: CicloDeVidaComponent, children: [
      { path: 'brigadeiro', component: BrigadeiroComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CicloRoutingModule { }
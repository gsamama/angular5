import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Jujuba } from './jujuba.component';
import { FormComponent } from './form.component';

const routes: Routes = [
  { path: 'ciclo', loadChildren: 'app/ciclo-de-vida/exemple.module#ExempleModule' },
  { path: 'jujuba', component: Jujuba },
  { path: 'form', component: FormComponent },
  { path: '', pathMatch:'full', redirectTo: 'jujuba'} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
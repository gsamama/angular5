import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Jujuba } from './jujuba.component';
import { FormComponent } from './form.component'

import { Exemple } from './ciclo-de-vida/exemple.service';
import { ExempleModule } from './ciclo-de-vida/exemple.module';
import { AppRoutingModule } from './app.routes';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ExempleModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, Jujuba, FormComponent ],
  providers:    [ Exemple ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

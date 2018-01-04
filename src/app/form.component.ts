import { Component, Input } from '@angular/core';

@Component({
  selector: 'formulario',
  templateUrl: './form.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class FormComponent  {
  txtNome : string;
 
  constructor(){};
  publicar(nome){
    this.txtNome = nome;
  }
}

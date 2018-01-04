import { Component, Input } from '@angular/core';

@Component({
  selector: 'jujuba',
  template: `<h1>{{doce}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class Jujuba  {
  doce = 'Jujuba é dahora!';
}

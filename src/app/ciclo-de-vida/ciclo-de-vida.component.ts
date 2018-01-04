import {
  Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy } from '@angular/core';
import { Exemple } from './exemple.service';

@Component({
    selector: 'ciclo',
    templateUrl: './ciclo-de-vida.component.html',
    //template: '',
    styles: [``]
  })
export class CicloDeVidaComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, OnDestroy{

  constructor(
    private exemple: Exemple
  ){
    console.log("contrutor")
  };

  ngOnInit(){
    console.log("OnINit");
    console.log(this.exemple.getNome());
  }

  ngOnChanges(){
    console.log("OnChanges");
  }

  ngDoCheck(){
    console.log("DoCheck");
  }

  ngAfterContentInit() {
    console.log("AfterContentInit");
  }  

  ngAfterContentChecked() {
    console.log("AfterContentChecked");
  }

  ngAfterViewChecked(){
    console.log("AfterViewChecked");
  }

  ngOnDestroy() {
    console.log("OnDestroy");
  }

}

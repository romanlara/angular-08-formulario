import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { cleanSession } from 'selenium-webdriver/safari';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent implements OnInit {

  usuario: Object = {
    nombre: 'Roman',
    apellido: 'Lara',
    email: undefined
  };

  constructor() { }

  ngOnInit() {
  }

  guardar ( forma: NgForm ) {
    console.log('ngForm', forma);
    console.log('valor', forma.value);
    console.log('usuario', this.usuario);
  }

}

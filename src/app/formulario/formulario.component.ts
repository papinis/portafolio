import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  hola:boolean=true;


  constructor() { }

  ngOnInit(): void {
  }

  cerrarForm(){
    this.hola=false;
  }


  

}

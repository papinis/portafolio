import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {
  abrir:boolean=false;
  
  constructor() { }

  ngOnInit(): void {
  }

  abrirForm(){
  this.abrir=true;
  }

  
}



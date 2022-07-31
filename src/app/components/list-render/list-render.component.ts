import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent implements OnInit {

  animais = [
    { nome: "Turca", tipo: "Cachorro" },
    { nome: "Tom", tipo: "Gato" },
    { nome: "Frida", tipo: "Cachorro" },
    { nome: "Bob", tipo: "Cavalo" }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

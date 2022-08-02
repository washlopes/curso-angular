import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interfaces/Animal';
import { ListService } from 'src/app/services/list.service';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent implements OnInit {

  animais: Animal[] = [
    { nome: "Turca", tipo: "Cachorro", idade: 4 },
    { nome: "Tom", tipo: "Gato", idade: 10 },
    { nome: "Frida", tipo: "Cachorro", idade: 5 },
    { nome: "Bob", tipo: "Cavalo", idade: 1 }
  ];

  animal: Animal = { nome: "Sonic", tipo: "Cachorro", idade: 1 };

  detalhesDoAnimal: string = '';

  constructor(private listService: ListService) { }

  ngOnInit(): void {
  }

  showAge(animal: Animal) {
    this.detalhesDoAnimal = `O pet ${animal.nome} tem ${animal.idade} anos!`;
  }

  removeAnimal(animal: Animal) {
    console.log("Removendo animal...");
    this.animais = this.listService.remove(this.animais, animal);
  }

}

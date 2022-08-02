import { Injectable } from '@angular/core';
import { Animal } from '../interfaces/Animal';

@Injectable({
  providedIn: 'root'
})

export class ListService {

  constructor() { }

  remove(animais: Animal[], animal: Animal) {
    return animais.filter((a) => animal.nome !== a.nome);
  }
}

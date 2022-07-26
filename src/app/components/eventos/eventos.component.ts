import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  show: boolean = false;
  color: string = "red";

  constructor() { }

  ngOnInit(): void {
  }

  showMessage(): void {
    this.show = !this.show;
  }

  trocaCor(): void {
    this.color = "green";
  }

  trocaCorNovamente(): void {
    this.color = "yellow";
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  algumTexto = 'Testando o pipe Operator';

  hoje = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}

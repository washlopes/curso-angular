import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro-component',
  templateUrl: './primeiro-component.component.html',
  styleUrls: ['./primeiro-component.component.scss']
})

export class PrimeiroComponentComponent implements OnInit {

  name: string = 'Washington ';
  idade: number = 52;

  constructor() { }

  ngOnInit(): void {
  }

}

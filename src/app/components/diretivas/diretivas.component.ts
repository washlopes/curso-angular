import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss']
})
export class DiretivasComponent implements OnInit {

  size: number = 40;
  font: string = 'Arial';
  color: string = 'red';

  classes = ['green-title', 'small-title'];

  underline = 'underline-title';

  constructor() { }

  ngOnInit(): void {
  }

}

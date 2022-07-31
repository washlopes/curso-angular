import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.scss']
})
export class ChangeNumberComponent implements OnInit {

  @Output() changeNumer: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.changeNumer.emit();
    console.log("Mudou número")
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vwn-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit {
  mens: string
  name: string;
  constructor() { }

  ngOnInit(): void {
    this.mens = 'Dime tu nombre'
    this.name = 'Pepe'
  }
  onClick(ev) {
    console.log(ev)
    this.name = ''
  }
}

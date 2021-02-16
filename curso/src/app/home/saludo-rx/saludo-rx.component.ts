import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'vwn-saludo-rx',
  templateUrl: './saludo-rx.component.html',
  styleUrls: ['./saludo-rx.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SaludoRxComponent implements OnInit {
  mens: string
  fcName: FormControl;
  constructor() { }

  ngOnInit(): void {
    this.mens = 'Dime tu nombre'
    this.fcName = new FormControl('')
  }
  onClick(ev) {
    console.log(ev)
    this.fcName.reset('')
  }
}

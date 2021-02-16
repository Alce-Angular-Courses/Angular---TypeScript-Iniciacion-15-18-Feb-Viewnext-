import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vwn-home',
  template: `
    <div class="row">
     <vwn-saludo class="col-6"></vwn-saludo>
     <vwn-saludo-ref class="col-6"></vwn-saludo-ref>
     <vwn-saludo-rx class="col-6"></vwn-saludo-rx>
    </div>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

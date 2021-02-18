import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vwn-libros',
  template: `
    <div class="row">
      <vwn-mock class="col-6"></vwn-mock>
    </div>
  `,
  styles: [
  ]
})
export class LibrosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vwn-tareas',
  template: `
    <div class="row">
      <vwn-lista-simple class="col-6"></vwn-lista-simple>
      <vwn-lista class="col-6"></vwn-lista>
    </div>
  `,
  styles: [
  ]
})
export class TareasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

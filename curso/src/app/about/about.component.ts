import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vwn-about',
  template: `
    <vwn-coments></vwn-coments>
  `,
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

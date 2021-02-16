import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'vwn-saludo-ref',
  templateUrl: './saludo-ref.component.html',
  styleUrls: ['./saludo-ref.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SaludoRefComponent implements OnInit {
  @ViewChild('name', {static: true}) refName: ElementRef
  constructor() {
    console.log('Desde el constructor')
    console.dir(this.refName)
   }

  ngOnInit(): void {
    console.log('Desde el ngOnInit')
    console.dir(this.refName.nativeElement)
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'vwn-nueva',
  templateUrl: './nueva.component.html',
  styleUrls: ['./nueva.component.scss']
})
export class NuevaComponent implements OnInit {
  tarea: Tarea;
  @Output() evAdd: EventEmitter<Tarea>
  @Output() evDelete: EventEmitter<void>

  constructor() {
    this.evAdd = new EventEmitter()
    this.evDelete =  new EventEmitter()
   }

  ngOnInit(): void {
      this.tarea = new Tarea()
  }
  onClickSendAdd() {
    if(!this.tarea.nombre) {
      return
    }
    this.evAdd.next(this.tarea)
    this.tarea = new Tarea()
  }
  onClickSendDelete() {
    this.evDelete.next()
  }
}

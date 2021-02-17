import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'vwn-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() tarea: Tarea
  @Input() index: number;
  @Output() evCheck: EventEmitter<number>
  @Output() evDelete: EventEmitter<number>
  
  constructor() { 
    this.evCheck = new EventEmitter()
    this.evDelete = new EventEmitter()
  }

  ngOnInit(): void {
    this.tarea = {...this.tarea}
  
  }
  onChangeSend()  {
    this.evCheck.next(this.index)
  }

  onDeleteSend() {
    this.evDelete.next(this.index)
  }

}

import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'vwn-lista-simple',
  templateUrl: './lista-simple.component.html',
  styleUrls: ['./lista-simple.component.scss']
})
export class ListaSimpleComponent implements OnInit {
  tareas: Array<Tarea>;
  tarea: Tarea;

  constructor() { }

  ngOnInit(): void {
    this.tareas = []
    this.tarea = new Tarea()
  }

  onClickAdd() {
    if(!this.tarea.nombre) {
      return
    }
    this.tareas.push(this.tarea)
    this.tarea = new Tarea()
    console.log(this.tareas)
  }

  onClickDelete() {
    this.tareas = []
    console.log(this.tareas)
  }
}

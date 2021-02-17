import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'vwn-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
  
})
export class ListaComponent implements OnInit {
  tareas: Array<Tarea>; 
  store: string;

  constructor() { }

  ngOnInit(): void {
      this.store = 'tareas'
      this.tareas = localStorage.getItem(this.store) 
        ? JSON.parse(localStorage.getItem(this.store)) : []

  }

  addTarea(tarea: Tarea) {
    if(!tarea.nombre) {
      return
    }
    this.tareas.push(tarea)
    this.saveStore()
  }

  deleteTareas() {
    this.tareas = []
    this.saveStore()
  }

  onChangeState(index: number) {
    this.tareas[index].isCompleted = !this.tareas[index].isCompleted
    this.saveStore()
  }

  onDelete(index: number) {
    this.tareas.splice(index,1)
    this.saveStore()
  }

  saveStore() {
    localStorage.setItem(this.store, JSON.stringify(this.tareas))
  }

}

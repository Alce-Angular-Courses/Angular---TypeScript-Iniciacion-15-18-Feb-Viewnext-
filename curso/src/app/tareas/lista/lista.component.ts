import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'vwn-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
  
})
export class ListaComponent implements OnInit {
  tareas: Array<Tarea>; 
  /* store: string; */

  constructor(private storage: StorageService) { }

  ngOnInit(): void {
      /* this.store = 'tareas' */
      this.tareas = this.storage.getTareas()
      
      // localStorage.getItem(this.store) 
      //   ? JSON.parse(localStorage.getItem(this.store)) : []

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

  private saveStore() {
    const n = this.storage.setTareas(this.tareas)
    //localStorage.setItem(this.store, JSON.stringify(this.tareas))
    console.log('Salvado número', n)
  }
}

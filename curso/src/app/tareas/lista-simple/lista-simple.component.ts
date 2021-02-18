import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'vwn-lista-simple',
  templateUrl: './lista-simple.component.html',
  styleUrls: ['./lista-simple.component.scss']
})
export class ListaSimpleComponent implements OnInit {
  tareas: Array<Tarea>;
  tarea: Tarea;

  constructor(private storage: StorageService) { }

  ngOnInit(): void {
    this.tareas = this.storage.getTareas()
    this.tarea = new Tarea()
  }

  onClickAdd() {
    if(!this.tarea.nombre) {
      return
    }
    this.tareas.push(this.tarea)
    this.tarea = new Tarea()
    console.log(this.tareas)
    this.salvar()
  }

  onClickDelete() {
    this.tareas = []
    this.salvar()
  }

  private salvar() {
    const n = this.storage.setTareas(this.tareas)
    console.log(n)
  }
}

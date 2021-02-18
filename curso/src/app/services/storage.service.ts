import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  storeTareas: string
  numSaves: number
  constructor() { 
    this.storeTareas = 'tareas'
    this.numSaves = 0
  }

  setTareas(tareas : Array<Tarea>) {
    localStorage.setItem( this.storeTareas, JSON.stringify(tareas))
    return ++this.numSaves
  }
  
  getTareas(): Array<Tarea> {
    const data: Array<Tarea> =  localStorage.getItem(this.storeTareas) ?
      JSON.parse(localStorage.getItem(this.storeTareas) ) : []
    return data
  }
}

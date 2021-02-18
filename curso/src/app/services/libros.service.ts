import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../models/libro';
import { LIBROS } from '../models/libros.data';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor() { }

  getMock(clave): Array<Libro> {
    return LIBROS
  }

  getMockAsync(clave): Promise<Array<Libro>> {
    return new Promise( (resolve,reject) => {
      setTimeout(() => {
        return resolve(LIBROS)
      }, 2000)
    })
  }

  getMockRx(clave): Observable<Array<Libro>> {
    return new Observable(
      (observer) => {
        setTimeout(() => {
          return observer.next(LIBROS)
        }, 2000)        
      }
    )

  }
  
  
  // Promise {
  //    (resolve,reject) => {
  //     
  //   })
  // }

}

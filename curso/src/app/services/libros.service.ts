import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Libro } from '../models/libro';
import { LIBROS } from '../models/libros.data';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  urlBase: string;
  constructor(private http: HttpClient) {
    this.urlBase = environment.urlLibros
   }

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
  
  getLibros(clave): Observable<Array<Libro>> {
    return this.http.get(this.urlBase+clave)
    .pipe(
      map(
        (resp:any) => resp.items.map(item => {
          return new Libro(
            item.id, 
            item.volumeInfo.title, 
            item.volumeInfo.authors
            )
        })
      )
    )
  }

}

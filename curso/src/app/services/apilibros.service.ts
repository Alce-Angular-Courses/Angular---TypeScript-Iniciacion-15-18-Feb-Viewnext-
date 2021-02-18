import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class ApilibrosService {
  urlBase: string;
  constructor(private http: HttpClient) {
    this.urlBase = environment.urlApi
   }

   // getAll
   getLibros(): Observable<Array<Libro>> {
     return this.http.get(this.urlBase) as Observable<Array<Libro>>
   }
   // get
   getLibro(index: number): Observable<Libro> {
    return this.http.get(this.urlBase+index) as Observable<Libro>
  }
   // post
   createLibro(libro: any): Observable<Libro> {
    return this.http.post(this.urlBase, libro) as Observable<Libro>
   }
   // put
   updateLibro(index: number, libro: Libro): Observable<Libro> {
    return this.http.put(this.urlBase+index, libro) as Observable<Libro>
   }

   // delete
   deleteLibro(index: number): Observable<Object> {
    return this.http.delete(this.urlBase+index)
  }
   


}

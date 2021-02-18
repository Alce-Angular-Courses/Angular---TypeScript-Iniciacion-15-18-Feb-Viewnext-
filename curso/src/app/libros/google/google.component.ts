import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Component({
  selector: 'vwn-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.scss']
})
export class GoogleComponent implements OnInit {
  clave: string;
  libros: Array<Libro>;
  urlBase: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
      this.clave = ''
      this.libros = []
      this.urlBase = environment.urlLibros
  }

  onClickBuscar() {
    if(!this.clave) {
      return
    }
    this.http.get(this.urlBase+this.clave).toPromise().then(
      (resp:any) => { 
        this.libros= resp.items.map(item => {
            return new Libro(
              item.id, 
              item.volumeInfo.title,
              item.volumeInfo.authors)
        }
      )}
    )
    this.clave = ''
  }

  onClickBuscarRx() {
    if(!this.clave) {
      return
    }
    this.http.get(this.urlBase+this.clave).pipe(
      map(
        (resp:any) => resp.items.map(item => {
          return new Libro(
            item.id, 
            item.volumeInfo.title, 
            item.volumeInfo.authors
            )
        })
      )
    ).subscribe(
      (resp: Array<Libro>) => this.libros = resp
    )
    this.clave = ''
  }
}

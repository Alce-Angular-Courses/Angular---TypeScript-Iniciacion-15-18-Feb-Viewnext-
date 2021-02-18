import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { ApilibrosService } from 'src/app/services/apilibros.service';

@Component({
  selector: 'vwn-from-api',
  templateUrl: './from-api.component.html',
  styleUrls: ['./from-api.component.scss']
})
export class FromApiComponent implements OnInit {

  titulo: string;
  autor: string;
  libros: Array<Libro>;

  constructor(private api: ApilibrosService) { }

  ngOnInit(): void {
      this.titulo = ''
      this.autor = ''
      this.libros = []
  }

  onClickAdd() {
    const libro = {id: null, autor: [ this.autor], titulo: this.titulo }
    this.api.createLibro(libro).subscribe()

  }

  onClickMostrar() {
    this.api.getLibros().subscribe(
      (resp:Array<Libro>) => {
        console.log(resp)
        this.libros = resp
      }
    )

  }

}

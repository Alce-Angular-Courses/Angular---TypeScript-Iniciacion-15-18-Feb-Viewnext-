import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'vwn-byservicio',
  templateUrl: './byservicio.component.html',
  styleUrls: ['./byservicio.component.scss']
})
export class ByservicioComponent implements OnInit {

  clave: string;
  libros: Array<Libro>;
  constructor(private ls: LibrosService) { }

  ngOnInit(): void {
      this.clave = ''
      this.libros = []
  }

  onClickBuscar() {
    if(!this.clave) {
      return
    }
    this.ls.getLibros(this.clave).subscribe(
      (resp: Array<Libro>) => {
        this.libros = resp
      }
    )
  }

}

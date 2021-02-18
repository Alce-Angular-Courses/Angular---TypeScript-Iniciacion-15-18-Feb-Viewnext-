import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'vwn-mock',
  templateUrl: './mock.component.html',
  styleUrls: ['./mock.component.scss']
})
export class MockComponent implements OnInit {
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
    this.libros = []
    this.libros = this.ls.getMock(this.clave)
  }
 
  onClickBuscarAsync() {
    if(!this.clave) {
      return
    }
  // this.ls.getMockAsync(this.clave, ()=>{
  //     this.libros
  //   })
  this.libros = [] 
  this.ls.getMockAsync(this.clave).then(
      (resp) => {this.libros =  resp}
    )
  }


  onClickBuscarRx() {
    if(!this.clave) {
      return
    }
    this.libros = [] 
    this.ls.getMockRx(this.clave).subscribe(
      (resp) => {this.libros =  resp}
    )
  }
}

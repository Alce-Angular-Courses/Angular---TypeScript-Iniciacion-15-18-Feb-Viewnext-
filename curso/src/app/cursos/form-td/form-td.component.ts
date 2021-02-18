import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Alumno, Curso, Turno } from 'src/app/models/alumno';
import { CURSOS, TURNOS } from 'src/app/models/maestros.data';


@Component({
  selector: 'vwn-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.scss']
})
export class FormTdComponent implements OnInit {
  turnos: Array<Turno>
  cursos: Array<Curso>
  alumno: Alumno;
  @ViewChild('formAlumnos', {static: true}) form: NgForm
  constructor() { }

  ngOnInit(): void {
    this.cursos = CURSOS
    this.turnos = TURNOS
    console.log(this.form)
  }

  enviar() {
    this.alumno = this.form.value
    console.log(this.alumno)
  }

}

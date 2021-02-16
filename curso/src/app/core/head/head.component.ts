import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vwn-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {
  titulo: string;
  logo: string;
  constructor() {

  }

  ngOnInit(): void {
    this.titulo = 'Curso Angular 11 para Viewnext'
    this.logo = '../../assets/logo.svg'
  }

}

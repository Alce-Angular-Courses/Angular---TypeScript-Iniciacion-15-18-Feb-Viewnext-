import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vwn-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  hoy: Date
  constructor() { }

  ngOnInit(): void {
      this.hoy = new Date()
      this.hoy
  }

}

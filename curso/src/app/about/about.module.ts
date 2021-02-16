import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { ComentsComponent } from './coments/coments.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    ComentsComponent,
    PostComponent,
    AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }

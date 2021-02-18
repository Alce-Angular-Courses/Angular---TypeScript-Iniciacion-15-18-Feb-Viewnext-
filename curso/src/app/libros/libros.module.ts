import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { MockComponent } from './mock/mock.component';
import { FormsModule } from '@angular/forms';
import { GoogleComponent } from './google/google.component';
import { ByservicioComponent } from './byservicio/byservicio.component';


@NgModule({
  declarations: [LibrosComponent, MockComponent, GoogleComponent, ByservicioComponent],
  imports: [
    CommonModule,
    FormsModule,
    LibrosRoutingModule
  ]
})
export class LibrosModule { }

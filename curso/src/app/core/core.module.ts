import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeadComponent, 
    FooterComponent, MenuComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeadComponent,
    FooterComponent]
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'tareas', 
    loadChildren: () => import('./tareas/tareas.module').then(m => m.TareasModule)
  },
  {
    path: 'about', 
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  // { path: '**', component: PathNotFoundComponent }
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

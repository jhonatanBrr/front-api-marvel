import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudPersonajesComponent } from './componentes/crud-personajes/crud-personajes.component';

const routes: Routes = [
  { path: '', component: CrudPersonajesComponent },
  //{ path: 'second-component', component: SecondComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

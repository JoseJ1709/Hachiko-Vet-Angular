import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {RegistroComponent} from "./pages/registro/registro.component";
import {ListDComponent} from "./pages/list-d/list-d.component";


const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'mascotas', component : ListDComponent },
  {path: 'registro-m', component : RegistroComponent},
  {path: '' , redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

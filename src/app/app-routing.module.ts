import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {RegistroComponent} from "./pages/dogs/registro/registro.component";
import {ListDComponent} from "./pages/dogs/list-d/list-d.component";
import {ListCComponent} from "./pages/clients/list-c/list-c.component";
import {RegistroCComponent} from "./pages/clients/registro-c/registro-c.component";


const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'mascotas', component : ListDComponent },
  {path: 'registro-m', component : RegistroComponent},
  {path: '' , redirectTo: '/home', pathMatch: 'full'},
  {path: 'clientes', component : ListCComponent},
  {path: 'registro-c', component : RegistroCComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { TableDogsComponent } from './components/table-dogs/table-dogs.component';
import { RegistroDogsComponent } from './components/registro-dogs/registro-dogs.component';
import { RegistroComponent } from './pages/registro/registro.component';
import {FormsModule} from "@angular/forms";
import { ListDComponent } from './pages/list-d/list-d.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    TableDogsComponent,
    RegistroDogsComponent,
    RegistroComponent,
    ListDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

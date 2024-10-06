import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { TableDogsComponent } from './components/dogs/table-dogs/table-dogs.component';
import { RegistroDogsComponent } from './components/dogs/registro-dogs/registro-dogs.component';
import { RegistroComponent } from './pages/dogs/registro/registro.component';
import {FormsModule} from "@angular/forms";
import { ListDComponent } from './pages/dogs/list-d/list-d.component';
import {HttpClientModule} from "@angular/common/http";
import { TableClientComponent } from './components/client/table-client/table-client.component';
import { RegistroClientComponent } from './components/client/registro-client/registro-client.component';
import { ListCComponent } from './pages/clients/list-c/list-c.component';
import { RegistroCComponent } from './pages/clients/registro-c/registro-c.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    TableDogsComponent,
    RegistroDogsComponent,
    RegistroComponent,
    ListDComponent,
    TableClientComponent,
    RegistroClientComponent,
    ListCComponent,
    RegistroCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

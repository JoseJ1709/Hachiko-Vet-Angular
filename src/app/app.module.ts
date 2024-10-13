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
import { LoginClientComponent } from './pages/login/login-client/login-client.component';
import { LoginVetComponent } from './pages/login/login-vet/login-vet.component';
import { LoginComponentClient} from './components/client/login/login.component';
import {LoginComponentDogs} from "./components/dogs/login/login.component";
import { MascotasClientComponent } from './components/client/mascotas-client/mascotas-client.component';
import {MascotasComponent} from "./pages/clients/mascotas/mascotas.component";
import { DetailsComponent } from './components/dogs/details/details.component';
import { DetailDogComponent } from './pages/dogs/detail-dog/detail-dog.component';
import { RegistroVComponent } from './pages/administrador/registro-v/registro-v.component';
import { ListVComponent } from './pages/administrador/list-v/list-v.component';
import { LoginAdminComponent } from './pages/login/login-admin/login-admin.component';
import { LoginVeteComponent } from './components/vet/login-vete/login-vete.component';
import { TableVetComponent } from './components/vet/table-vet/table-vet.component';
import { RegistroVetComponent } from './components/vet/registro-vet/registro-vet.component';

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
    RegistroCComponent,
    LoginClientComponent,
    LoginVetComponent,
    LoginComponentClient,
    LoginComponentDogs,
    MascotasClientComponent,
    MascotasComponent,
    DetailsComponent,
    DetailDogComponent,
    RegistroVComponent,
    ListVComponent,
    LoginAdminComponent,
    LoginVeteComponent,
    TableVetComponent,
    RegistroVetComponent,
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

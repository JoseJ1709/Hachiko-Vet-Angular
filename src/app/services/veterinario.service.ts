import { Injectable } from '@angular/core';
import { VeterinarioCl } from '../interfaces/veterinario-cl';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService{
  constructor(private http: HttpClient) {
  }

  getVeterinarios(): Observable<VeterinarioCl[]> {
    return this.http.get<VeterinarioCl[]>('http://localhost:8090/veterinario/all');
  }

  getVeterinarioById(id: number): Observable<VeterinarioCl> {
    console.log(id);
    return this.http.get<VeterinarioCl>(`http://localhost:8090/veterinario/find/`+id);
  }

  deleteVeterinario(id: number){
    this.http.delete(`http://localhost:8090/veterinario/eliminar/`+id).subscribe();
  }

  addVeterinario(veterinario: VeterinarioCl): void {
    this.http.post('http://localhost:8090/veterinario/agregar', veterinario).subscribe();
  }

  updateVeterinario(veterinario: VeterinarioCl): void {
    this.http.put(`http://localhost:8090/veterinario/editar/${veterinario.id}`, veterinario).subscribe();
  }

  loginVeterinario(cedula : number, contrase :string ): Observable<Boolean> {
    return this.http.get<Boolean>('http://localhost:8090/veterinario/find/' + cedula);
  }
}

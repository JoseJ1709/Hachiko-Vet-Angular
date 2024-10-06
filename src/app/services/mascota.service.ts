import { Injectable } from '@angular/core';
import { MascotaCl } from '../interfaces/mascota-cl';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  constructor(private http: HttpClient) {
  }

  getMascotas(): Observable<MascotaCl[]> {
    return this.http.get<MascotaCl[]>('http://localhost:8090/mascota/all');
  }

  getMascotaById(id: number): Observable<MascotaCl> {
    return this.http.get<MascotaCl>(`http://localhost:8090/mascota/find/`+id);
  }
  deleteMascota(id: number){
    this.http.delete(`http://localhost:8090/mascota/eliminar/`+id).subscribe();
  }

  addMascota(mascota: MascotaCl, clienteId: number | undefined): void {
    if (clienteId !== undefined) {
      const url = `http://localhost:8090/mascota/agregar/${clienteId}?clienteId=${clienteId}`;
      this.http.post(url, mascota).subscribe();
    } else {
      console.error('Cliente ID is undefined');
    }
  }

  updateMascota(mascota: MascotaCl, clienteId :number | undefined ): void {
    if (clienteId !== undefined) {
      const url = `http://localhost:8090/mascota/editar/${mascota.id}?clienteId=${clienteId}`;
      this.http.put(url, mascota).subscribe();
    }else {
      console.error('Cliente ID is undefined');
    }

  }

}

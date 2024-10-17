import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {TratamientoCl} from "../interfaces/tratamiento-cl";
@Injectable({
  providedIn: 'root'
})
export class TratamientoService {
  constructor( private http: HttpClient) {
  }

  addTratamiento(mascotaId :number | undefined, veterinarioId :number | undefined, drogaId :number | undefined, fecha :string){
    if (mascotaId !== undefined && veterinarioId !== undefined && drogaId !== undefined) {
      const url = `http://localhost:8090/tratamiento/agregar/${mascotaId}/${veterinarioId}/${drogaId}/${fecha}`;
      console.log(url);
      this.http.post(url, {}).subscribe( (data) => {
        console.log(data);
      });
    } else {
      console.error('Cliente ID is undefined');
    }
  }
  getTratamientoMascota(mascotaId :number) : Observable<TratamientoCl[]>{
      return this.http.get<TratamientoCl[]>(`http://localhost:8090/tratamiento/mascota/${mascotaId}`);
  }

  getTratamientosVeterinario(veterinarioId :number) : Observable<TratamientoCl[]>{
      console.log(veterinarioId);
      return this.http.get<TratamientoCl[]>(`http://localhost:8090/tratamiento/veterinario/${veterinarioId}`);
  }
}

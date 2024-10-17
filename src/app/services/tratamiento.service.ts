import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
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
}

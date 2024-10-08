import {ClienteCl} from "../interfaces/cliente-cl";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MascotaCl} from "../interfaces/mascota-cl";
import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ClienteService{
    constructor(private http: HttpClient) {
    }

    getClientes(): Observable<ClienteCl[]> {
      return this.http.get<ClienteCl[]>('http://localhost:8090/cliente/all');
    }

    getClienteById(id: number): Observable< ClienteCl> {
      return this.http.get<ClienteCl>(`http://localhost:8090/cliente/find/`+id);
    }
    getClientesMascotas(id: number): Observable<MascotaCl[]> {
      return this.http.get<MascotaCl[]>(`http://localhost:8090/cliente/mascotas/`+id);
    }
    deleteCliente(id: number){
      this.http.delete(`http://localhost:8090/cliente/eliminar/`+id).subscribe();
    }
    addCliente(cliente: ClienteCl){
      this.http.post('http://localhost:8090/cliente/agregar ', cliente).subscribe();
    }

    updateCliente(cliente: ClienteCl): void {
      const url = `http://localhost:8090/cliente/editar/${cliente.id}`;
      this.http.put(url, cliente).subscribe();
    }
    loginCLiente(cedula : number ): Observable<ClienteCl> {
      return this.http.get<ClienteCl>('http://localhost:8090/cliente/login/' + cedula);
    }
    mascotasClientes (id: number): Observable<MascotaCl[]> {
      return this.http.get<MascotaCl[]>('http://localhost:8090/cliente/mascotas/' + id);
    }

}

import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DrogaCl} from "../interfaces/droga-cl";

@Injectable({
  providedIn: 'root'
})

export class DrograService{
    constructor( private http: HttpClient) {
    }

    getDrogas(): Observable<DrogaCl[]>{
        return this.http.get<DrogaCl[]>('http://localhost:8090/droga/all');
    }
}

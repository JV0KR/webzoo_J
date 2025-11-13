import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AnimalService {

  apiUri = '/api/animals';
  //si lo ven necesario, se pueden crear otras variables para las otras peticiones ejemplo:
  //apiUri2 = '/api/animals/all';
  httpOptions = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {

  }
//Método para consultar todos los animales
  getAllAnimalsData(): Observable<any> {
    //get es el verbo HTTP GET
    return this.http.get<any>(this.apiUri)
  }



}

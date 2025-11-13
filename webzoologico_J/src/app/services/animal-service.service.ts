import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
  apiUri = '/api/animals',
  httpOptions = new HttpHeaders().set('Content-Type',
  'application/json');
})
export class AnimalServiceService {

  constructor(private http: HttpClient) { }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private myAppUrl = "https://localhost:7042/"; //url del backend
  private myApiUrl = "api/card/" //url del api de los controladores

  //Inyectamos una variable HttpClient
  constructor(private http: HttpClient) { }

  //El observable se una par hacer peticiones Async, retorna un formato JSON 
  getListCard(): Observable<any>
  {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }
}

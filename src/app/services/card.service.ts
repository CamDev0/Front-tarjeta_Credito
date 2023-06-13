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

  //GET .. El observable se una par hacer peticiones Async, retorna un formato JSON 
  getListCard(): Observable<any>
  {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  //DELETE
  deleteCard(id: number): Observable<any>
  {
    //En el argumento del delete armamos la ruta url con el id que se va a eliminar
    return this.http.delete(this.myAppUrl + this.myApiUrl + id)
  }

  //POST
  saveCard(tarjeta: any): Observable<any>
  {
    return this.http.post(this.myAppUrl + this.myApiUrl, tarjeta);
  }

  //PUT 
  updateCard(id: number, tarjeta: any): Observable<any>
  {
    return this.http.put(this.myAppUrl + this.myApiUrl + id, tarjeta);
  }
}

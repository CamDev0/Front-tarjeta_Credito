import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private URLprod = "https://fbcreditcard20230618135144.azurewebsites.net/api/card/";
  private myAppUrl = "https://localhost:7042/"; //url del backend
  private myApiUrl = "api/card/" //url del api de los controladores

  //Inyectamos una variable HttpClient
  constructor(private http: HttpClient) { }

  //GET .. El observable se una par hacer peticiones Async, retorna un formato JSON 
  getListCard(): Observable<any>
  {
    // return this.http.get(this.myAppUrl + this.myApiUrl);
    return this.http.get(this.URLprod);
  }

  //DELETE
  deleteCard(id: number): Observable<any>
  {
    //En el argumento del delete armamos la ruta url con el id que se va a eliminar

    // return this.http.delete(this.myAppUrl + this.myApiUrl + id)
    return this.http.delete(this.URLprod + id)
  }

  //POST
  saveCard(tarjeta: any): Observable<any>
  {
    // return this.http.post(this.myAppUrl + this.myApiUrl, tarjeta);
    return this.http.post(this.URLprod, tarjeta);
  }

  //PUT 
  updateCard(id: number, tarjeta: any): Observable<any>
  {
    // return this.http.put(this.myAppUrl + this.myApiUrl + id, tarjeta);
    return this.http.put(this.URLprod + id, tarjeta);
  }
}

import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Products } from './shared/products';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://localhost:8080/products";

  constructor(private httpClient: HttpClient) { }
 // Http Headers
 httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

  public sendGetRequest(){
    return this.httpClient.get<Products[]>(this.REST_API_SERVER);
  }

  public getProducts():Observable<Products[]> {
    return this.httpClient.get<Products[]>(this.REST_API_SERVER)
    .pipe(retry(1), catchError(this.errorHandl));
  }


  // Error handling
  errorHandl(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Products } from './shared/products';
import { retry, catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public cartItems: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  private Base_API_SERVER = "http://localhost:8080/api/";
  private Base_API_SERVER1 = "http://api.passionfordessert.net/api/";

  //private REST_API_SERVER = "http://localhost:8080/api/products";
  //private REST_API_SERVER1 = "http://api.passionfordessert.net/products";

  constructor(private httpClient: HttpClient) { }
 // Http Headers
 httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

  // public sendGetRequest(){
  //   return this.httpClient.get<Products[]>(this.REST_API_SERVER);
  // }

  // public getProducts():Observable<Products[]> {
  //   return this.httpClient.get<Products[]>(this.REST_API_SERVER)
  //   .pipe(retry(1), catchError(this.errorHandl));
  // }

  public getlistAllProductType(type:string):Observable<Products[]> {
    return this.httpClient.get<Products[]>(this.Base_API_SERVER+"listAllProductType/"+type)
    .pipe(retry(1), catchError(this.errorHandl));
  }

  cartProductList:any = [];
  addItem(productData:any){
    this.cartProductList.push(productData); 
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
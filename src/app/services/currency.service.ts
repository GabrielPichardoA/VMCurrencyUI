import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService{

  constructor(private apiHttpService: HttpClient) { }
  currentInfo: any;


  getCurrency(currency:string): Observable<any> {
    return this.apiHttpService.get(`https://localhost:7250/Currency/${currency}`)
      .pipe(
        catchError(this.ErrorHandler)
      );
  }

  private ErrorHandler(error: HttpErrorResponse) {
    if(error.statusText === "Unknown Error") {
      return throwError(() => new Error('Something bad happened; please try again later.'));
    } else if(error.error.includes("InvalidCodeException")){
      return throwError(() => new Error("Currency supplied is not valid."));
    } else {
      return throwError(() => new Error('Something bad happened; please try again later.'));
    }
  }
}

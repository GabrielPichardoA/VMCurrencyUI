import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { ExchangeModel } from '../core/models/Exchange.interface';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService{

  constructor(private apiHttpService: HttpClient) { }
  currentInfo: any;


  doPurchase(exchangeRequest:ExchangeModel): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.apiHttpService.post<any>('https://localhost:7250/Exchange', exchangeRequest, { headers })
      .pipe(
        catchError(this.ErrorHandler)
      );
  }

  private ErrorHandler(error: HttpErrorResponse) {
    if(error.error.includes("AmountExceedsLimitException")){
      return throwError(() => new Error("Amount attempted exceed the monthly limit allowed. Please try with a lower amount."));
    } else {
      return throwError(() => new Error('Something bad happened; please try again later.'));
    }
  }
}

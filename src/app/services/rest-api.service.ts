import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Cryptocurrency } from '../shared/models/cryptocurrency.model';
import { User } from '../shared/models/user.model';


@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiURL = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {
  }


  public getAllCryptocurrencies(): Observable<Cryptocurrency[]> {
    return this.http.get<Cryptocurrency[]>(this.apiURL + '/cryptocurrency').pipe(retry(1), catchError(this.handleError));
  }

  public getCryptocurrency(cryptocurrencyname: string): Observable<Cryptocurrency> {
    return this.http.get<Cryptocurrency>(this.apiURL + '/cryptocurrency/' + cryptocurrencyname)
      .pipe(retry(1), catchError(this.handleError));
  }

  public deleteCryptocurrency(cryptocurrencyname: string): void {
    this.http.delete(this.apiURL + '/cryptocurrency/' + cryptocurrencyname)
      .pipe(retry(1), catchError(this.handleError));
  }

  // ?
  public createCryptocurrency(cryptocurrency: Cryptocurrency): void {
    // return this.http.post(this.apiURL + '/cryptocurrency/create', {cryptocurrency});
  }

  public addCryptocurrencytoUserFavouriteList(cryptocurrencyname: string): Observable<any> {
    console.log('elo');
    console.log(this.apiURL + '/cryptocurrency/' + cryptocurrencyname);
    return this.http.post<any>(this.apiURL + '/cryptocurrency/' + cryptocurrencyname, {});
  }

  public getUserFavouriteCryptocurrencyList(): Observable<Cryptocurrency[]> {
    return this.http.get<Cryptocurrency[]>(this.apiURL + '/myCryptocurrencies').pipe(retry(1), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}

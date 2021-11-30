import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Cryptocurrency } from '../shared/models/cryptocurrency.model';
import { Notification, NotificationRequest } from '../shared/models/notification.model';
import { User } from '../shared/models/user.model';
import { CryptocurrencyDetails } from '../shared/models/cryptocurrencyDetails.model';


@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  apiURL = 'http://localhost:8080/api';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  public getAllCryptocurrencies(): Observable<Cryptocurrency[]> {
    return this.http.get<Cryptocurrency[]>(this.apiURL + '/cryptocurrency').pipe(retry(1), catchError(this.handleError));
  }

  public getCryptocurrency(cryptocurrencyname: string): Observable<Cryptocurrency> {
    return this.http.get<Cryptocurrency>(this.apiURL + '/cryptocurrency/' + cryptocurrencyname)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  public deleteCryptocurrency(cryptocurrencyname: string): Observable<any> {
    return this.http.delete(this.apiURL + '/cryptocurrency/' + cryptocurrencyname)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  public addCryptocurrencytoUserFavouriteList(cryptocurrencyname: string): Observable<any> {
    return this.http.post(this.apiURL + '/myCryptocurrency/add/' + cryptocurrencyname, this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  public removeCryptocurrencyFromUserFavouriteList(cryptocurrencyname: string): Observable<any> {
    return this.http.post(this.apiURL + '/myCryptocurrency/remove/' + cryptocurrencyname, this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }


  public getUserFavouriteCryptocurrencyList(): Observable<Cryptocurrency[]> {
    return this.http.get<Cryptocurrency[]>(this.apiURL + '/myCryptocurrency')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }


  public getUserNotifications(): Observable<Notification[]> {
    return this.http.get<Notification[]>(this.apiURL + '/notifications/myNotifications').pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  public removeNotification(notificationId: string): Observable<any> {
    return this.http.delete(this.apiURL + '/notifications/myNotifications/' + notificationId, this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  public createNotification(notification: NotificationRequest): Observable<any> {
    return this.http.post(this.apiURL + '/notifications', notification).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  public updateNotification(notification: Notification): void{
    this.http.put(this.apiURL + '/notifications/' + notification.id, notification).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  public getAllNotifications(): Observable<Notification[]>{
    return this.http.get<Notification[]>(this.apiURL + '/notifications/all').pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  public getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.apiURL + '/users/all').pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  public getAllCryptocurrencyDetails(): Observable<CryptocurrencyDetails[]> {
    return this.http.get<CryptocurrencyDetails[]>(this.apiURL + '/cryptocurrencyDetails/all').pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  public removeCryptocurrencyDetails(cryptocurrencyDetailsName: string): Observable<any> {
    return this.http.delete(this.apiURL + '/cryptocurrencyDetails/' + cryptocurrencyDetailsName + '/delete').pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  public orderReport(): Observable<any>{
    return this.http.post(this.apiURL + '/cryptocurrency/report', null).pipe(
      retry(1),
      catchError(this.handleError)
    );
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

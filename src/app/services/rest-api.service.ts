import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse ,HttpHeaders} from "@angular/common/http";
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {Cryptocurrency} from '../shared/models/cryptocurrency.model';
import {User} from '../shared/models/user.model';


@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiURL = 'http://localhost:8080/api';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }



  public getAllCryptocurrencies(){
    return this.http.get<Cryptocurrency[]>(this.apiURL+"/cryptocurrency").pipe(retry(1), catchError(this.handleError));
  }

  public getCryptocurrency(cryptocurrencyname: string){
    return this.http.get<Cryptocurrency>(this.apiURL+"/cryptocurrency/"+cryptocurrencyname).pipe(retry(1), catchError(this.handleError));
  }

  public deleteCryptocurrency(cryptocurrencyname: string){
    return this.http.delete(this.apiURL+"/cryptocurrency/"+cryptocurrencyname).pipe(retry(1), catchError(this.handleError));
  }

  //fix this
  public createCryptocurrency(cryptocurrency: Cryptocurrency){
    return this.http.post(this.apiURL+"cryptocurrency/create",{cryptocurrency},this.httpOptions);
  }


  handleError(error: HttpErrorResponse) {
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

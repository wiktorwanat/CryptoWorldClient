import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  apiUrl="http://localhost:8080/api/auth/";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }


  public login(username: string , password: string ){
    this.http.post(this.apiUrl+"signin",{username,password},this.httpOptions);
  }

  public registration(username: string,password: string,email: string){
    this.http.post(this.apiUrl+"signup",{username,password,email},this.httpOptions);
  }
}

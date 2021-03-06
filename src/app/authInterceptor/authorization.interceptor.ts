import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { TokenStorageService } from '../services/token-storage.service';
import { Observable } from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

   // TOKEN_HEADER_KEY = 'Authorization';
  constructor(private token: TokenStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("intercept");
    const token = this.token.getToken();
    if (token != null) {
      req = req.clone({setHeaders: {Authorization: 'Bearer '+token}});
    }
    return next.handle(req);
  }
}
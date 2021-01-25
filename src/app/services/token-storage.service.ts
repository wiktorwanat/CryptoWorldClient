import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

TOKEN_KEY = 'authorization-token';
USER_KEY = 'authorization-user';

  constructor() { }

  public logout(){
    window.sessionStorage.clear();
    console.log("User successfully logout")
  }

  public saveTokenIntoStorage(token:string):void{
    window.sessionStorage.removeItem(this.TOKEN_KEY);
    window.sessionStorage.setItem(this.TOKEN_KEY,token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(this.TOKEN_KEY);
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(this.USER_KEY);
    if (user) {
      return JSON.parse(user);
    }else{
      return {};
    }
  }
  
}

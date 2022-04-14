import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoginRequest } from '../models/login-request.model';
import { LoginResponse } from '../models/login-response.model';
import { catchError, mapTo, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly access_token = 'access_token';
   url = 'http://localhost:3000/login';

  constructor(private http: HttpClient) { }

  storeTokens(Loginresponse :LoginResponse)
  {
    localStorage.setItem(this.access_token,Loginresponse.access_token);
  }
  login(lreq : LoginRequest): Observable<boolean>{
    lreq.password = 'password'
    lreq.username = 'radr4@gmail.com'
    const body = new HttpParams()
    .set('username', 'radr4@gmail.com')
    .set('password', 'password');
    return this.http.post<LoginResponse>(this.url,body.toString(), {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    }).
    pipe(
      tap(lres => this.storeTokens(lres)),
      mapTo(true),
      catchError(_error =>{ 
        return of(false) ;
      })
    )
  }



  /**login(lreq : LoginRequest): Observable<boolean>{
    return this.http.post<LoginResponse>(this.url,lreq).
    pipe(
      tap(lres => this.storeTokens(lres)),
      mapTo(true),
      catchError(_error =>{ 
        return of(false) ;
      })
    )
  }*/
  
}

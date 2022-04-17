import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { LoginRequest } from '../models/login-request.model';
import { LoginResponse } from '../models/login-response.model';
import { catchError, map, mapTo, tap } from "rxjs/operators";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly access_token = 'access_token';
   url = 'http://localhost:3000/login';
   CurrentUserUrl = 'http://localhost:3000/api/users/currentUser';

  constructor(private http: HttpClient) { }

  storeTokens(Loginresponse :LoginResponse)
  {
    localStorage.setItem(this.access_token,Loginresponse.access_token);
    localStorage.setItem('refresh_token',Loginresponse.refresh_token);
    
  }


  login(lreq : LoginRequest): Observable<boolean>{
   
    const body = new HttpParams()
    .set('username', lreq.username)
    .set('password', lreq.password);
    return this.http.post<LoginResponse>(this.url,body.toString(), {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    }).
    pipe(
      tap(lres => this.storeTokens(lres)),
      mapTo(true),
      catchError(this.handleError)
    )
  }

  CurrentUser():Observable<any>
  {
    return this.http.get<any>(this.CurrentUserUrl);
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened : '+error.error.message));
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

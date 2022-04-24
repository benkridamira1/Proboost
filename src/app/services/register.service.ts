import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

import { registerRequest } from '../models/registration/register-request/registerRequest';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url:string = 'http://localhost:3000/api/v1/registration' ;

  constructor( private http : HttpClient) { }
  register(reg : registerRequest): Observable<registerRequest> {
    return this.http.post<registerRequest>(this.url,reg) .pipe(
      catchError(this.handleError)
    );
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


}



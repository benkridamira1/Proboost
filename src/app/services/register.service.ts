import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { registerRequest } from '../models/registration/register-request/registerRequest';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url:string = 'http://localhost:3000/api/v1/registration' ;

  constructor( private http : HttpClient) { }
  register(reg : registerRequest): Observable<registerRequest> {
    return this.http.post<registerRequest>(this.url,reg);
  }

}



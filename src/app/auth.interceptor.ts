import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    const clonedRequest = request.clone({ headers: request.headers.append('Authorization',
     `Bearer ${localStorage. getItem('access_token')}`) });
    

    console.log(request.headers.get('Authorization'));
    
   /*const authReq = request.clone({
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': `Bearer ${localStorage. getItem('access_token')}`,
      'Access-Control-Allow-Origin' : '*'
    })
  });*/

  console.log(request.headers.get('Authorization'));
    return next.handle(clonedRequest);
  }


  
}


export const AuthInterceptorProvider = {
  provide : HTTP_INTERCEPTORS,
  useClass : AuthInterceptor,
  multi : true,
}

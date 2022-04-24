import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Offre } from 'src/app/models/offre';
const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class ListOffreService {
  apiURL: string = 'http://localhost:3000/offre/all';
  
  apiURL1: string = 'http://localhost:3000/api/users/users';
  constructor(private http : HttpClient) { }


  listeOffre(): Observable<any> {
    return this.http.get<any>(this.apiURL);
    }
  

    
  

    
  
  
    getUsers(): Observable<any> {
      return this.http.get<any>(this.apiURL1);
      }

}






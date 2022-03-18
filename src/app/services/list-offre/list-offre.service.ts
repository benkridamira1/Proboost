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

  constructor(private http : HttpClient) { }


  listeOffre(): Observable<Offre[]> {
    return this.http.get<Offre[]>(this.apiURL);
    }
    

}




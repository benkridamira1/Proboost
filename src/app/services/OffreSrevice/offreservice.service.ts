import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Offre } from 'src/app/models/offre';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators } from '@angular/forms';
const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  apiURL : string ='http://localhost:3000/offre/add';

  apiURLgetAll: string = 'http://localhost:3000/offre/all';

 

  choixmenu : string  = 'A';
  public dataForm !:  FormGroup; 
  

  constructor(private http : HttpClient) { }


  listeOffre(): Observable<Offre[]> {
    return this.http.get<Offre[]>(this.apiURLgetAll);
   
    }


  getOffreByID(id: number) : Observable<Object> {
    return this.http.get <Offre>(`${this.apiURL}/${id}`);
  }

    
  addOffre(offre : Offre) : Observable<Offre> {

      return this.http.post<Offre>(this.apiURL, offre,httpOptions);
    }


    

    deleteOffre(id: number): Observable<any> {
   
      return this.http.delete(`${this.apiURL}/${id}`, { responseType: 'text' });
    }


   
  

}






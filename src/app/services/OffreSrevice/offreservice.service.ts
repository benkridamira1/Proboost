import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Offre } from 'src/app/models/offre';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators } from '@angular/forms';
import { identifierName } from '@angular/compiler';
const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  apiURL : string ='http://localhost:3000/offre/add';

  apiURLgetAll: string = 'http://localhost:3000/offre/all';

  baseURL :  string ='http://localhost:3000/offre';

  salarySearchURL : string ='http://localhost:3000/offre/salary'; 



 

  choixmenu : string  = 'A';
  public dataForm !:  FormGroup; 
  

  constructor(private http : HttpClient) { }


  listeOffre(): Observable<Offre[]> {
    return this.http.get<Offre[]>(this.apiURLgetAll);
   
    }

    listUsers():Observable<any>{
      return this.http.get<any>('http://localhost:3000/api/users/users')
    }


  getOffreByID(id: number) : Observable<Offre> {
    return this.http.get<Offre>(`${this.baseURL}/${id}`);
    //`${this.baseURL}/${id}`
  }

    
  addOffre(offre : Offre, id:number) : Observable<Offre> {

      return this.http.post<Offre>(`${this.apiURL}/${id}`, offre,httpOptions);
    }


  updateOffre(offre : Offre  , id:number ): Observable<Offre> { 
    return this.http.put<Offre>(`${this.baseURL}/${id}`, offre,httpOptions);
  }

    deleteOffre(id: number): Observable<any> {
   
      return this.http.delete(`${this.baseURL}/${id}`, { responseType: 'text' });
    }


    offreSalaryRange(min :number , max : number){
      return this.http.get(`${this.salarySearchURL}/${min}/${max}`)
    }
   

    maxSalary(){
      return this.http.get('http://localhost:3000/offre/maxSalary')
    }
    minSalary(){
      return this.http.get('http://localhost:3000/offre/minSalary')
    }

}






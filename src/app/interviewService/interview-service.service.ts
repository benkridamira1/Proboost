import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class InterviewServiceService {

  constructor(private http:HttpClient) { }

  getInterviews(id:number)
  {
    return this.http.get<any>("http://localhost:3000/entretien/getbyrecruter/"+id);
  }

  saveinterview(interview:object)
  {
    return this.http.post<any>("http://localhost:3000/entretien/save",interview);
  } 

}

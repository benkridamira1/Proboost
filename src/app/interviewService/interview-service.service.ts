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

  getoneinterview(id:number)
  {
    return this.http.get<any>("http://localhost:3000/entretien/get/"+id);
  }

  getquiznumber(id:number)
  {
    return this.http.get<any>("http://localhost:3000/entretien/getquiznumber/"+id)
  }

  getqcmbyentretien(id:number)
  {
    return this.http.get<any>("http://localhost:3000/entretien/getqcmbyentretien/"+id);
  }

  deleteqcm(interview_id:number,qcm_id:number)
  {
    return this.http.delete<any>("http://localhost:3000/entretien/deleteqcm/"+interview_id+"/"+qcm_id);
  }

  deleteinterview(id:number)
  {
    return this.http.delete<any>("http://localhost:3000/entretien/delete/"+id);
  }

  getbycandidat(id:number)
  {
    return this.http.get<any>("http://localhost:3000/entretien/getbycandidat/"+id);
  }
}

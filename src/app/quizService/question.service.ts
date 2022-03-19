import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  getQuestions(){
    return this.http.get<any>("http://localhost:3000/question/getall");
  }

  saveRecords(record:object)
  {
     return this.http.post<any>("http://localhost:3000/records/save",record)
  }

  saveCheater(cheater:object)
  {
     return this.http.post<any>("http://localhost:3000/cheaters/save",cheater)
  }
}

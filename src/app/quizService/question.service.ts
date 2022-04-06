import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  getQuestions(id:number){
    return this.http.get<any>("http://localhost:3000/question/getbyqcm/"+id);
  }

  saveRecords(record:object)
  {
     return this.http.post<any>("http://localhost:3000/records/save",record)
  }

  saveCheater(cheater:object)
  {
     return this.http.post<any>("http://localhost:3000/cheaters/save",cheater)
  }

  savequiz(quiz:object)
  {
    return this.http.post<any>("http://localhost:3000/qcm/add",quiz);
  }

  getallquiz()
  {
    return this.http.get<any>("http://localhost:3000/qcm/all");
  }

  getquiz(id:number)
  {
    return this.http.get<any>("http://localhost:3000/qcm/get/"+id)
  }

  addquestion(question:object)
  {
    return this.http.post<any>("http://localhost:3000/question/add/",question);
  }

  deletequiz(id:number)
  {
    return this.http.delete<any>("http://localhost:3000/qcm/delete/"+id);
  }

  getquestiondetails(id:number)
  {
    return this.http.get<any>("http://localhost:3000/question/getone/"+id);
  }

  addanswer(answer:object,id:number)
  {
    return this.http.post<any>("http://localhost:3000/answer/save/"+id,answer);
  }

  deletequestion(id:number)
  {
    return this.http.delete<any>("http://localhost:3000/question/delete/"+id);
  }

  deleteanswer(id:number)
  {
    return this.http.delete<any>("http://localhost:3000/answer/delete/"+id);
  }

  getoneanswer(id:number)
  {
    return this.http.get<any>("http://localhost:3000/answer/get/"+id);
  }

  updatecorrectanswer(id:number,answer:object)
  {
    return this.http.post<any>("http://localhost:3000/question/updatecorrectanswer/"+id,answer);
  }

  getbycreator(id:number)
  {
    return this.http.get<any>("http://localhost:3000/qcm/getbycreator/"+id);
  }
}
 
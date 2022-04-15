import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RecordServiceService {

  constructor(private http:HttpClient) { }

  getrecord(user:string,id:number)
  {
    return this.http.get<any>("http://localhost:3000/records/findrecord/"+user+"/"+id);
  }

  getbyinterview(id:number)
  {
    return this.http.get<any>("http://localhost:3000/records/getbyinterview/"+id);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideochatService {

  constructor(private http:HttpClient) { }

  getrequests(userid:number)
  {
    return this.http.get<any>("http://localhost:3000/videochat/getall/"+userid);
  }

  getrecruterchats(userid:number)
  {
    return this.http.get<any>("http://localhost:3000/videochat/getmyinterviews/"+userid);
  }

  savechat(chat:any)
  {
    return this.http.post<any>("http://localhost:3000/videochat/save",chat);
  }

  getcandidat(username:any)
  {
    return this.http.get<any>("http://localhost:3000/videochat/getuser/aminechiba");
  }
}

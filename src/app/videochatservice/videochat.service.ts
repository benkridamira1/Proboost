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

  getcandidat(email:any)
  {
    return this.http.get<any>("http://localhost:3000/videochat/getuser/"+email);
  }

  getcandidatbeta(id:any)
  {
    return this.http.get<any>("http://localhost:3000/videochat/getcandidat/"+id);
  }

  savecandidat(id:any,candidat_id:any)
  {
    return this.http.get<any>("http://localhost:3000/videochat/setcandidat/"+id+"/"+candidat_id);
  }

  finishchat(id:any)
  {
    return this.http.get<any>("http://localhost:3000/videochat/finishchat/"+id);
  }
}

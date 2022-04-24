import { Component, OnInit } from '@angular/core';
import { VideochatService } from '../videochatservice/videochat.service';

@Component({
  selector: 'app-videochatrq',
  templateUrl: './videochatrq.component.html',
  styleUrls: ['./videochatrq.component.css']
})
export class VideochatrqComponent implements OnInit {

  videochats:any;
  candidatid:any=2;
  late:any =[];
  constructor(private videochatService:VideochatService) { }

  ngOnInit(): void {
    this.videochatService.getrequests(this.candidatid).subscribe(res =>{
      this.videochats=res;
      this.videochats.map((val:any) =>{
          if(new Date(val.date+":"+val.hour+":"+val.minute)< new Date())
          {
            this.late[val.id]=true;
          }
      })
    })
  }

}

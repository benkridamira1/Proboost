import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
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
  constructor(private videochatService:VideochatService,private authservice:AuthenticationService) { }

  ngOnInit(): void {

this.authservice.CurrentUser().subscribe(res =>{
  this.videochatService.getrequests(res.id).subscribe(res =>{
  this.videochats=res;
  this.videochats.map((val:any) =>{
      if(new Date(val.date+":"+val.hour+":"+val.minute)< new Date())
      {
        this.late[val.id]=true;
      }
  })
})

}) 
}




}

import { Component, OnInit } from '@angular/core';
import { InterviewServiceService } from '../interviewService/interview-service.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-interviewrq',
  templateUrl: './interviewrq.component.html',
  styleUrls: ['./interviewrq.component.css']
})
export class InterviewrqComponent implements OnInit {

  myinterview:any = [];
  late:any = [];
  constructor(private interviewService:InterviewServiceService,private authservice:AuthenticationService) { }

  ngOnInit(): void {

    this.authservice.CurrentUser().subscribe(res =>{
      this.interviewService.getbycandidat(res.id).subscribe(res =>{
        this.myinterview=res;
        this.myinterview.map((val:any)=> 
        {
          if(new Date(val.date+":"+val.hour+":"+val.minute) < new Date())
          {
            this.late[val.id]=true;
          }
         
        } );
    
      })
    })
  
  }


}

import { Component, OnInit } from '@angular/core';
import { InterviewServiceService } from '../interviewService/interview-service.service';

@Component({
  selector: 'app-interviewrq',
  templateUrl: './interviewrq.component.html',
  styleUrls: ['./interviewrq.component.css']
})
export class InterviewrqComponent implements OnInit {

  myinterview:any = [];
  dateOne:Date=new Date();
  late:any = [];
  constructor(private interviewService:InterviewServiceService) { }

  ngOnInit(): void {
  this.interviewService.getbycandidat(2).subscribe(res =>{
    this.myinterview=res;
    this.myinterview.map((val:any)=> 
    {
      console.log(new Date(val.date));
      console.log(new Date(this.dateOne));
      if(new Date(val.date).getFullYear()==new Date().getFullYear() && new Date(val.date).getMonth()==new Date().getMonth() && new Date(val.date).getDay()==new Date().getDay())
      {
        if (((parseInt(val.hour)+parseInt(val.minute)) < new Date().getHours()+new Date().getMinutes()))
        {
          this.late[val.id]=true;
        }
      }

      if ( (new Date(val.date).getFullYear()+new Date(val.date).getMonth()+new Date(val.date).getDay()) < (this.dateOne.getFullYear()+this.dateOne.getMonth()+this.dateOne.getDay()) )
      {
        this.late[val.id]=true;
      } 
    } );

  })
  }


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { InterviewServiceService } from '../interviewService/interview-service.service';
import { QuestionService } from '../quizService/question.service';
import { RecordServiceService } from '../recordservice/record-service.service';

@Component({
  selector: 'app-passquiz',
  templateUrl: './passquiz.component.html',
  styleUrls: ['./passquiz.component.css']
})
export class PassquizComponent implements OnInit {

  id:any;
  interview:any;
  quizs:any= [];
  index:number=0;
  numberquestions:any =[];
  passed:any=[];
  constructor(private _Activatedroute:ActivatedRoute,private interviewService:InterviewServiceService,private questionService:QuestionService
    ,private recordService:RecordServiceService) { }

  ngOnInit(): void {

    this._Activatedroute.paramMap.subscribe(params => { 
      this.id=params.get('id');
      this.interview =this.interviewService.getoneinterview(this.id).subscribe(res =>{
        this.interview=res;
      })
      this.interviewService.getqcmbyentretien(this.id).subscribe(res =>{
        this.quizs=res;
        this.quizs.map((q:any )=>{
         this.questionService.getnumberofquestiosn(q.id).subscribe(res =>{
           this.numberquestions[q.id]=res;
         });
         this.recordService.getrecord("AngularUser",q.id).subscribe(res =>{
           this.passed[q.id]=res;
         })
        })
      })

     
  });


  }

}

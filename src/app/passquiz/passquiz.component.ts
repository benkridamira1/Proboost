import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { InterviewServiceService } from '../interviewService/interview-service.service';

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
  constructor(private _Activatedroute:ActivatedRoute,private interviewService:InterviewServiceService) { }

  ngOnInit(): void {

    this._Activatedroute.paramMap.subscribe(params => { 
      this.id=params.get('id');
      this.interview =this.interviewService.getoneinterview(this.id).subscribe(res =>{
        this.interview=res;
      })
      this.interviewService.getqcmbyentretien(this.id).subscribe(res =>{
        this.quizs=res;
      })

      console.log(this.quizs)
  });


  }

}

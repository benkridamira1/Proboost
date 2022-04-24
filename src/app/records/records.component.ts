import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InterviewServiceService } from '../interviewService/interview-service.service';
import { RecordServiceService } from '../recordservice/record-service.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {
  
  interviewid:any;
  interview:any;
  records:any= [];
  constructor(private interviewService:InterviewServiceService,private _Activatedroute:ActivatedRoute,private recordService:RecordServiceService) { }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.interviewid= params.get('id'); 
      this.interviewService.getoneinterview(this.interviewid).subscribe(res =>{
        this.interview=res;
        this.recordService.getbyinterview(this.interviewid).subscribe(res =>{
          this.records=res;
        })
      })
  });

  }

}

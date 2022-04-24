import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Router} from "@angular/router"
import { interval, Subscription } from 'rxjs';
import { InterviewServiceService } from '../interviewService/interview-service.service';


@Component({
  selector: 'app-interviewmanager',
  templateUrl: './interviewmanager.component.html',
  styleUrls: ['./interviewmanager.component.css']
})
export class InterviewmanagerComponent implements OnInit {

  interviews:any;
  formValue!:FormGroup;
  cheaters:any=[];
  cheaterdetails:any=[];
  constructor(private interviewService:InterviewServiceService,private formbuilder:FormBuilder,private router:Router)
  {
    
    }

  ngOnInit(): void {


  this.formValue=this.formbuilder.group({
    date: Date,
    titre : [''],
    type : [''],
    hour: Number,
    minute : Number
  })

interval(3000).subscribe(()=>{
  this.refresh();
})
  }

  saveinterview()
  {
    this.formValue.value.recruteur={id:1};
    this.formValue.value.candidat={id:2};
    this.interviewService.saveinterview(this.formValue.value).subscribe();
    document.getElementById("cancel")?.click();
    this.reloadComponent();
  }

  getcheaterdetails(id:number)
  {
    this.interviewService.getcheaters(id).subscribe(res =>{
      this.cheaterdetails=res;
    })
  }

loadinterview()
{
  this.interviewService.getInterviews(1).subscribe(res =>{
    this.interviews=res;
    for(let i = 0; i < this.interviews.length; i++)
    {
     
      this.interviewService.verifycheaters(this.interviews[i].id).subscribe(res => {
        this.cheaters[this.interviews[i].id]=res;
        
      })
    
    }
    
  })
}
  refresh()
  {
   this.loadinterview()
  }

  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }

}

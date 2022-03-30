import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Router} from "@angular/router"
import { InterviewServiceService } from '../interviewService/interview-service.service';

@Component({
  selector: 'app-interviewmanager',
  templateUrl: './interviewmanager.component.html',
  styleUrls: ['./interviewmanager.component.css']
})
export class InterviewmanagerComponent implements OnInit {

  interviews:any;
  formValue!:FormGroup;
  constructor(private interviewService:InterviewServiceService,private formbuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
  this.interviewService.getInterviews(1).subscribe(res =>{
    this.interviews=res;
  })

  this.formValue=this.formbuilder.group({
    date: Date,
    titre : [''],
    type : [''],
    hour: Number,
    minute : Number
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

  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }

}

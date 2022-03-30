import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../quizService/question.service';
import {Router} from "@angular/router"


@Component({
  selector: 'app-questiondetails',
  templateUrl: './questiondetails.component.html',
  styleUrls: ['./questiondetails.component.css']
})
export class QuestiondetailsComponent implements OnInit {

  formValue!:FormGroup
  answers:any=[];
  id!:any;
  question!:any;
  updateid!:any;
  updateanswer!:any;
  constructor(private questionservice:QuestionService,private _Activatedroute:ActivatedRoute,private formbuilder:FormBuilder
    ,private router:Router) { }

  ngOnInit(): void {

    this.formValue=this.formbuilder.group({
      text : [''],
    })

    this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id'); 
  });
  this.questionservice.getquestiondetails(this.id).subscribe(res=>{
     this.question=res;
     this.answers=res.answers;
  })

  }

  addoption()
  {
    this.questionservice.addanswer(this.formValue.value,this.id).subscribe();
    document.getElementById("cancel")?.click();
  this.reloadComponent();
  }


  deletequestion()
  {
    this.questionservice.deletequestion(this.id).subscribe();
    this.router.navigate(["Quizdetails",this.question.qcm.id]);
  }

  setupdateid(id:any)
  {
    this.updateid=id;
    this.questionservice.getoneanswer(id).subscribe(res =>{
      this.updateanswer=res.text;
    });
  }

  updateoption()
  {
    if(this.updateanswer==this.question.correctanswer)
    {
      this.formValue.value.id=this.updateid;
      this.questionservice.updatecorrectanswer(this.question.id,this.formValue.value).subscribe();
      this.questionservice.addanswer(this.formValue.value,this.id).subscribe();
      document.getElementById("cancelupdate")?.click();
      this.reloadComponent();
    }
    
    this.formValue.value.id=this.updateid;
    this.questionservice.addanswer(this.formValue.value,this.id).subscribe();
    document.getElementById("cancelupdate")?.click();
  this.reloadComponent();
  }

  deleteoption()
  {
    this.questionservice.deleteanswer(this.updateid).subscribe();
    document.getElementById("cancelupdate")?.click();
    this.reloadComponent();
  }

  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }

    

}

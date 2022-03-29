import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../quizService/question.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-quizdetails',
  templateUrl: './quizdetails.component.html',
  styleUrls: ['./quizdetails.component.css']
})
export class QuizdetailsComponent implements OnInit {

  formValue !:FormGroup;
  id:any;
  quiz:any;
  questions:any =[];
  newquestion:any;
  constructor(private _Activatedroute:ActivatedRoute, private quizservice:QuestionService,private formbuilder:FormBuilder
    ,private router:Router) { }

  ngOnInit(): void {

    this.formValue=this.formbuilder.group({
      question : [''],
      correctanswer : ['']
    })

    

    this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id'); 
  });
  this.quizservice.getquiz(this.id).subscribe(res=>{
    this.quiz=res;
  })
  this.quizservice.getQuestions(this.id).subscribe(res=>{
    this.questions=res;
  })
  }


  addquestion()
  {
    
    this.formValue.value.qcm={id:this.id}
    this.quizservice.addquestion(this.formValue.value).subscribe(res =>{
      this.newquestion=res;
    });
    this.quizservice.addanswer(this.formValue.value.correctanswer,this.newquestion.id).subscribe();
    document.getElementById("cancel")?.click();
  this.reloadComponent();
  }

  deletequiz()
  {
    this.quizservice.deletequiz(this.id).subscribe();
    this.router.navigate(["Createquiz"]);
  }

  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }

}

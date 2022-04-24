import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InterviewServiceService } from '../interviewService/interview-service.service';
import { QuizdetailsComponent } from '../quizdetails/quizdetails.component';
import { QuestionService } from '../quizService/question.service';

@Component({
  selector: 'app-interviewdetails',
  templateUrl: './interviewdetails.component.html',
  styleUrls: ['./interviewdetails.component.css']
})
export class InterviewdetailsComponent implements OnInit {

  id:any;
  interview:any;
  Quizs: any =[];
  quiznumber!:any;
  currentquiz:any;
  istherecurrentquiz:boolean=false;
  exist!:number;
  constructor(private _Activatedroute:ActivatedRoute,private interviewService:InterviewServiceService,private quizService:QuestionService
    ,private router:Router) { }

  ngOnInit(): void {

    this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id'); 
  });

  this.interviewService.getoneinterview(this.id).subscribe(res=>{
    this.interview=res;
  })

  ///check here
  this.interviewService.getquiznumber(this.id).subscribe(res=>{
    this.quiznumber=res;
  })

 

  this.quizService.getbycreator(1).subscribe(res =>{
    this.Quizs=res;
   
    for(var i=0;i< this.Quizs.length;i++)
    {
      for(var j=0;j < this.Quizs[i].entretiens.length;j++)
      {
        if(this.Quizs[i].entretiens[j].id==this.interview.id)
        {
          this.Quizs.splice(i,1);
        }
      }
      
    }


  })

  
  if(localStorage.getItem("showquiz")=="true")
  {
    document.getElementById("showquiz")?.click();
    localStorage.setItem("showquiz","false");
  }
  
this.showquiz();

  }

  assignquiz(quiz:any)
  {
    alert(this.interview.id)
    quiz.entretiens.push({id:this.interview.id});
    this.quizService.savequiz(quiz).subscribe();
    document.getElementById("cancel")?.click();
    this.assignshow();
    this.showquiz();
    localStorage.setItem("showquiz","true");
    this.reloadComponent();
  }


  showquiz()
  {
    this.interviewService.getqcmbyentretien(this.interview.id).subscribe(res =>{
      this.currentquiz=res;
      this.exist=res.length;
    })
  
   if(this.currentquiz.length!=0)
   {
     this.istherecurrentquiz=true;
   }
   else
   {
   this.istherecurrentquiz=false;
   }
  }

  assignshow()
  {
    for(var i=0;i< this.Quizs.length;i++)
    {
      for(var j=0;j < this.Quizs[i].entretiens.length;j++)
      {
        if(this.Quizs[i].entretiens[j].id==this.interview.id)
        {
          this.Quizs.splice(i,1);
        }
      }
      
    }
  }

  deleteqcm(qcm_id:number)
  {
    this.interviewService.deleteqcm(this.interview.id,qcm_id).subscribe();
    document.getElementById("cancelassigned")?.click();
    this.reloadComponent();
  }
  
  deleteinterview()
  {
    this.interviewService.deleteinterview(this.interview.id).subscribe(res =>{
      alert(res);
    });
    this.router.navigateByUrl("Interviewmanager");
  }

  reloadComponent() {

    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }

}

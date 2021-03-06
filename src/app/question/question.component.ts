import { Component, OnInit,Inject, Renderer2 } from '@angular/core';
import { interval } from 'rxjs';
import { QuestionService } from '../quizService/question.service';
import Swal from 'sweetalert2';
import {  DOCUMENT } from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router"
import { AuthenticationService } from '../services/authentication.service';
import { NotificationService } from '../services/notification.service';



@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  id:any;
  public questionlist:any = [];
  public currentquestion:number = 0;
  public score:number=0;
  public counter:number=60;
  public intelval$:any;
  public progress:string='0';
  public finalscore:string='0';
  public quizCompleted:boolean=false;
  public showremain:boolean=false;
  public gored:boolean=false;
  public quizlength:number=0;
  public numscore:number=0;
  interviewid:any;
  constructor(private questionService:QuestionService, private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document,private router:Router,private _Activatedroute:ActivatedRoute
    ,private authservice:AuthenticationService,private notifservice:NotificationService) { }


  ngOnInit(): void 
  {

    this._Activatedroute.paramMap.subscribe(params => { 
      this.id=params.get('id');
      this.interviewid=params.get('interviewid');
      })

    let script = this._renderer2.createElement('script');
    script.type = `text/javascript`;
    script.text = `
    {
      $(window).blur(function() {
        document.getElementById("cheated").click();
    });

    $(document).ready(function() {
      $("body").on("contextmenu", function(e) {
          return false;
      });
  });

    }
  `;
   
    this._renderer2.appendChild(this._document.body, script);
    this.getquestions();
    this.showremain=false;
    this.startcounter();
    
  }

  

  getquestions()
  {
    this.questionService.getQuestions(this.id)
    .subscribe(res =>{
      this.questionlist=res;
      this.quizlength=res.length;
    })
  
  }
  
  finishquiz()
  {
    this.quizCompleted=true;
    this.stopcounter();
    let date=new Date();
    this.finalscore=((this.score/this.questionlist.length)*100).toFixed(1).toString();
    this.numscore=Number(this.finalscore);
    this.authservice.CurrentUser().subscribe(res=>{
      let record= 
      {
       user:res.prenom + " "+res.nom,
       date:date.toUTCString(),
       qcm:{id:this.id},
       score:this.finalscore,
       entretien:{id:this.interviewid}
      }
      this.questionService.saveRecords(record).subscribe();
      this.notifservice.savenotif({type:"result",opened:false,user:{id:res.id},entretien:{id:this.interviewid}}).subscribe();
    })
    setTimeout(()=>{
      this.router.navigateByUrl("/Interviewrq");
    },3000);
  }


  answercorrection(nbquestion:number,answer:any)
  {
    
    
     if(this.questionlist[nbquestion].correctanswer==answer.text)
     {
       setTimeout(()=>{
        this.score++;
        this.resetcounter();
        this.currentquestion++;
        this.showremain=false;
        this.getprogress();
       },1000)
       
     }
     else
     {
       setTimeout(()=>{
        this.resetcounter();
        this.currentquestion++;
        this.getprogress();
       },1000)
       this.finalscore=((this.score/this.questionlist.length)*100).toFixed(1).toString();
      
     }

     if(this.currentquestion+1>=this.questionlist.length)
     {
      
       setTimeout(()=>{
        this.showremain=true;
         this.finalscore=((this.score/this.questionlist.length)*100).toFixed(1).toString();
         this.quizCompleted=true;
         this.stopcounter();
         this.finishquiz();
         
       },3000)
       setTimeout(()=>{
        this.finishconfirmation();
       },1000)
       
       
     }
  }

  startcounter()
  {
    
    this.intelval$=interval(1000)
    .subscribe(val =>{
      this.counter--;
      if(this.counter==10)
      {
        this.gored=true;
      }
      if(this.counter==0)
      {
        this.currentquestion++;

        if(this.currentquestion==this.questionlist.length)
     {
         this.finalscore=((this.score/this.questionlist.length)*100).toFixed(1).toString();
         this.quizCompleted=true;
         this.showremain=true;
         this.stopcounter();
         this.finishconfirmation();
         this.finishquiz();
     }

     else
     {
        this.resetcounter();
        this.showremain=false;
     }
      }
    });
    setTimeout(()=>{
     this.intelval$.unsubscribe();
    },10000000)
  }

  stopcounter()
  {
    this.intelval$.unsubscribe()
    this.counter=0;
  }

  resetcounter()
  {
   this.stopcounter();
   this.counter=60;
   this.gored=false;
   this.startcounter();
  }

  getprogress()
  {
    this.progress=((this.currentquestion/this.questionlist.length)*100).toFixed(1).toString();
    return this.progress;
  }


  finishconfirmation() {
    Swal.fire('Finished!', 'Quiz finished successfully.', 'success');
  }
  cheaterNotification() {
    Swal.fire('Cheater', 'You changed the window so the Quiz stopped!', 'error');
    this.authservice.CurrentUser().subscribe(res =>{
      let cheater= 
      {
        user:res.prenom+" "+res.nom,
        date:new Date().toUTCString(),
        qcm:
        {
          id:this.id
        },
        entretien :
        {
          id:this.interviewid
        }
      }
      
      this.questionService.saveCheater(cheater).subscribe();
    })
    
    this.router.navigate([""]);
  }
  alertConfirmation() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, dont finish the quiz',
    }).then((result) => {
      if (result.value) {
        setTimeout(()=>{
          this.finishquiz();
        },3000)
        Swal.fire('Finished!', 'Quiz finished successfully.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Quiz Continues.', 'error');
      }
    });
  }



}

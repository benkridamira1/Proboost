import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";
import { InterviewServiceService } from '../interviewService/interview-service.service';
import { AuthenticationService } from '../services/authentication.service';
import { VideochatService } from '../videochatservice/videochat.service';

@Component({
  selector: 'app-videochatmanager',
  templateUrl: './videochatmanager.component.html',
  styleUrls: ['./videochatmanager.component.css']
})
export class VideochatmanagerComponent implements OnInit {

  form!:FormGroup;
  chats:any=[];
  candidat:any;
  currentuser:any;
  candidats:any=[];
  constructor(private videochatservice:VideochatService,private formbuilder:FormBuilder,private authservice:AuthenticationService
    ,private router:Router) { }

  ngOnInit(): void {

    this.form=this.formbuilder.group({
      code : [''],
      titre :[''],
      date: Date,
      hour :Number,
      minute:Number,
      email:['']
    })

    this.authservice.CurrentUser().subscribe(res=>{
      this.currentuser=res;
      this.getchats(this.currentuser.id);
    })

    

    

  }


  getchats(id:any)
{
  
  this.videochatservice.getrecruterchats(id).subscribe(res =>{
    this.chats=res;
    this.chats.map((data:any)=>{
       this.videochatservice.getcandidatbeta(data.id).subscribe(res=>{
         this.candidats[data.id]=res;
       })
    })
  })
}

  savechat()
  {
    
   
      this.videochatservice.getcandidat(this.form.value.email).subscribe(res =>{
        this.candidat=res;
        this.form.value.candidat={id:Number(this.candidat.id)}
        this.form.value.recruter={id:this.currentuser.id}
        this.videochatservice.savechat(this.form.value).subscribe(res =>{
          this.videochatservice.savecandidat(res.id,this.form.value.candidat.id).subscribe();
        });
      })
    
 

     
    
   
    
    document.getElementById("cancel")?.click();
    this.videochatservice.getrecruterchats(this.currentuser.id).subscribe(res =>{
      this.chats=res;
    })
  }

  finishchat(id:Number)
  {
    this.videochatservice.finishchat(id).subscribe();
    this.reloadComponent()
  }

  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }

}

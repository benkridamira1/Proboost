import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  constructor(private videochatservice:VideochatService,private formbuilder:FormBuilder) { }

  ngOnInit(): void {

    this.form=this.formbuilder.group({
      code : [''],
      titre :[''],
      date: Date,
      hour :Number,
      minute:Number
    })

    this.videochatservice.getrecruterchats(1).subscribe(res =>{
      this.chats=res;
    })
  }

  savechat()
  {
    setTimeout(()=>{
      this.videochatservice.getcandidat(this.form.value.username).subscribe(res =>{
        this.candidat=res;
        console.log(this.candidat)
      })
    },2000)
    


    this.form.value.candidat={id:this.candidat.id}
    this.form.value.recruteur={id:1}
    this.videochatservice.savechat(this.form.value).subscribe();
    document.getElementById("cancel")?.click();
    this.videochatservice.getrecruterchats(1).subscribe(res =>{
      this.chats=res;
    })
  }

}

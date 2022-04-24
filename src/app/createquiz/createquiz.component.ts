import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormBuilder,FormGroup } from '@angular/forms';
import { QuestionService } from '../quizService/question.service';
import {Router} from "@angular/router"
@Component({
  selector: 'app-createquiz',
  templateUrl: './createquiz.component.html',
  styleUrls: ['./createquiz.component.css','./createquiz.component.scss']
})
export class CreatequizComponent implements OnInit {

  formValue !:FormGroup;
  allquiz: any =[];
  constructor(private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document,private formbuilder:FormBuilder,private quizservice:QuestionService,
    private router:Router) { }

  ngOnInit(): void {

    this.formValue=this.formbuilder.group({
      titre : [''],
    })

    this.quizservice.getallquiz().subscribe(res=>{
      this.allquiz=res;
    });

    let script = this._renderer2.createElement('script');
    script.type = `text/javascript`;
    script.text = `
    {
     
     
    }
  `;
   
    this._renderer2.appendChild(this._document.body, script);
    
  }

  addquiz()
  {
    
     this.quizservice.savequiz(this.formValue.value)
     .subscribe(res=>{
       console.log(res)
     })
     this.formValue.reset();
     let ref=document.getElementById("cancel");
     ref?.click();
     this.reloadComponent();
  }

  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }
  

}

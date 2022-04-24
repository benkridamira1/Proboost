import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome-quiz',
  templateUrl: './welcome-quiz.component.html',
  styleUrls: ['./welcome-quiz.component.css']
})
export class WelcomeQuizComponent implements OnInit {

  quizid:any;
  interviewid:any;
  constructor(private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {

    this._Activatedroute.paramMap.subscribe(params => { 
      this.quizid=params.get('id');
      this.interviewid=params.get('interviewid');
      })
  }

}

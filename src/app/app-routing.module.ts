import { JobDetailsComponent } from './job-details/job-details.component';
import { FindAJobComponent } from './find-a-job/find-a-job.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { ContactComponent} from './contact/contact.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeQuizComponent } from './welcome-quiz/welcome-quiz.component';
import { QuestionComponent } from './question/question.component';
import { CreatequizComponent } from './createquiz/createquiz.component';
import { VideochatComponent } from './videochat/videochat.component';
import { QuizdetailsComponent } from './quizdetails/quizdetails.component';
import { QuestiondetailsComponent } from './questiondetails/questiondetails.component';
import { InterviewmanagerComponent } from './interviewmanager/interviewmanager.component';
import { InterviewdetailsComponent } from './interviewdetails/interviewdetails.component';
import { InterviewrqComponent } from './interviewrq/interviewrq.component';
import { PassquizComponent } from './passquiz/passquiz.component';




const routes: Routes = [
  {path: 'FindAJob' ,  component: FindAJobComponent},
  {path: '' ,  component: HomeComponent},
  {path: 'About' ,  component: AboutComponent},
   {path: 'Contact' ,  component: ContactComponent},
   {path: 'job_details' ,  component: JobDetailsComponent},
   {path: 'Quiz', component: WelcomeQuizComponent},
   {path : 'Question/:id', component:QuestionComponent},
   {path: 'Createquiz',component:CreatequizComponent},
   {path: "Videochat",component:VideochatComponent},
   {path: "Quizdetails/:id",component:QuizdetailsComponent},
   {path: "Questiondetails/:id",component:QuestiondetailsComponent},
   {path : "Interviewmanager",component:InterviewmanagerComponent},
   {path: "Interviewdetails/:id",component:InterviewdetailsComponent},
   {path: "Interviewrq",component:InterviewrqComponent},
   {path: "Passquiz/:id",component:PassquizComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

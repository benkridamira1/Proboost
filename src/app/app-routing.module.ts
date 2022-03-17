import { JobDetailsComponent } from './job-details/job-details.component';
import { FindAJobComponent } from './find-a-job/find-a-job.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { ContactComponent} from './contact/contact.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeQuizComponent } from './welcome-quiz/welcome-quiz.component';
import { QuestionComponent } from './question/question.component';




const routes: Routes = [
  {path: 'FindAJob' ,  component: FindAJobComponent},
  {path: '' ,  component: HomeComponent},
  {path: 'About' ,  component: AboutComponent},
   {path: 'Contact' ,  component: ContactComponent},
   {path: 'job_details' ,  component: JobDetailsComponent},
   {path: 'Quiz', component: WelcomeQuizComponent},
   {path : 'Question', component:QuestionComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

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
import { PostJobComponent } from './post-job/post-job.component';
import { CvUploadComponent } from './cv-upload/cv-upload.component';
import { UpdateJobComponent } from './update-job/update-job.component';




const routes: Routes = [
  {path: 'FindAJob' ,  component: FindAJobComponent},
  {path: '' ,  component: HomeComponent},
  {path: 'About' ,  component: AboutComponent},
   {path: 'Contact' ,  component: ContactComponent},
   {path: 'FindAJob/job_details/:id' ,  component: JobDetailsComponent},
   {path: 'Quiz', component: WelcomeQuizComponent},
   {path : 'Question', component:QuestionComponent},
   {path: 'Createquiz',component:CreatequizComponent},
   {path: "Videochat",component:VideochatComponent},
   {path: "PostJob",component:PostJobComponent},
   {path: "FindAJob/job_details/:id/updateJobOffer",component:UpdateJobComponent}


   
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

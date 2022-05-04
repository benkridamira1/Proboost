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
import { CvComponent } from './cv/cv.component';

import { VideochatrqComponent } from './videochatrq/videochatrq.component';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { OffreComponent } from './offre/offre.component';
import { ProfilComponent } from './profil/profil.component';
import { QuizdetailsComponent } from './quizdetails/quizdetails.component';
import { InterviewmanagerComponent } from './interviewmanager/interviewmanager.component';
import { PassquizComponent } from './passquiz/passquiz.component';
import { InterviewrqComponent } from './interviewrq/interviewrq.component';
import { InterviewdetailsComponent } from './interviewdetails/interviewdetails.component';
import { QuestiondetailsComponent } from './questiondetails/questiondetails.component';
import { RecordsComponent } from './records/records.component';
import { VideochatmanagerComponent } from './videochatmanager/videochatmanager.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';




const routes: Routes = [
  {path: 'FindAJob' ,  component: FindAJobComponent},
  {path: '' ,  component: HomeComponent},
  {path: 'About' ,  component: AboutComponent},
   {path: 'Contact' ,  component: ContactComponent},
   {path: 'job_details' ,  component: JobDetailsComponent},
   {path: 'Quiz/:id/:interviewid', component: WelcomeQuizComponent},
   {path : 'Question/:id/:interviewid', component:QuestionComponent},
   {path: 'Createquiz',component:CreatequizComponent},
   {path: "Videochat",component:VideochatComponent},
   {path: "Quizdetails/:id",component:QuizdetailsComponent},
   {path: "Questiondetails/:id",component:QuestiondetailsComponent},
   {path : "Interviewmanager",component:InterviewmanagerComponent},
   {path: "Interviewdetails/:id",component:InterviewdetailsComponent},
   {path: "Interviewrq",component:InterviewrqComponent},
   {path: "Passquiz/:id",component:PassquizComponent},
   {path: "Records/:id",component:RecordsComponent},
   {path: "Videochatrq",component:VideochatrqComponent},
   {path: "Videochatmanager",component:VideochatmanagerComponent},
   {path: "login",component:LoginComponent},
   {path: "register",component:RegistrationComponent},
   {path: "profil",component:ProfilComponent},
   {path: "offre",component:OffreComponent},
   {path: 'FindAJob/job_details/:id' ,  component: JobDetailsComponent},
   {path: 'Quiz', component: WelcomeQuizComponent},
   {path : 'Question', component:QuestionComponent},
   {path: 'Createquiz',component:CreatequizComponent},
   {path: "Videochat",component:VideochatComponent},
   {path: "PostJob",component:PostJobComponent},
   {path: "FindAJob/job_details/:id/updateJobOffer",component:UpdateJobComponent},
   {path: "FindAJob/job_details/:id/uploadCv",component:CvUploadComponent},
   {path: "FindAJob/job_details/:id/uploadCv/CV",component:CvComponent},
   {path: 'admin' ,  component: AdminDashboardComponent},



   
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

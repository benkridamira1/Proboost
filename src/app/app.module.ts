import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { JobSearchComponent } from './job-search/job-search.component';
import { JobCategoryComponent } from './job-category/job-category.component';
import { CvUploadComponent } from './cv-upload/cv-upload.component';
import { RecentJobsComponent } from './recent-jobs/recent-jobs.component';
import { ApplyProcessComponent } from './apply-process/apply-process.component';
import { CreativeDirectorComponent } from './creative-director/creative-director.component';
import { PostJobComponent } from './post-job/post-job.component';
import { RecentNewsComponent } from './recent-news/recent-news.component';
import { JobListComponent } from './job-list/job-list.component';
import { FindAJobComponent } from './find-a-job/find-a-job.component';
import { JobFilterComponent } from './job-filter/job-filter.component';
import { JobFilterResultComponent } from './job-filter-result/job-filter-result.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { WelcomeQuizComponent } from './welcome-quiz/welcome-quiz.component';
import { QuestionComponent } from './question/question.component';
import { ChangeBgDirective } from './change-bg.directive';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CreatequizComponent } from './createquiz/createquiz.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VideochatComponent } from './videochat/videochat.component';
import { QuizdetailsComponent } from './quizdetails/quizdetails.component';
import { QuestiondetailsComponent } from './questiondetails/questiondetails.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    JobSearchComponent,
    JobCategoryComponent,
    CvUploadComponent,
    RecentJobsComponent,
    ApplyProcessComponent,
    CreativeDirectorComponent,
    PostJobComponent,
    RecentNewsComponent,
    JobListComponent,
    FindAJobComponent,
    JobFilterComponent,
    JobFilterResultComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    JobDetailsComponent,
    WelcomeQuizComponent,
    QuestionComponent,
    ChangeBgDirective,
    CreatequizComponent,
    VideochatComponent,
    QuizdetailsComponent,
    QuestiondetailsComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      "backgroundColor": "#F1F1F1",
      "backgroundPadding": -18,
      "radius": 60,
      "toFixed": 2,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#FF6347",
      "innerStrokeColor": "#32CD32",
      "innerStrokeWidth": 1,
      "startFromZero": true}),
      FormsModule,
   ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

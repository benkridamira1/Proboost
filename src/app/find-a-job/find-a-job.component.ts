import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Offre } from '../models/offre';
import { ListOffreService } from '../services/list-offre/list-offre.service';

@Component({
  selector: 'app-find-a-job',
  templateUrl: './find-a-job.component.html',
  styleUrls: ['./find-a-job.component.css']
})
export class FindAJobComponent implements OnInit {

  offres : Offre[] = [];
  tempOffres : Offre[] = [];
  offresRecherche  !: Offre[];
  jobsType :any [] = ["All"];

  recruteurs : any[] = ["All"];

  locations  : any[] = ["All"];

  experiences  : any[] = ["All"];

  offersbydate : any[] = ["All"];

  constructor(private listOffreService : ListOffreService) { 
    

  }

  ngOnInit(): void {

    this.listOffreService.listeOffre().subscribe(off => {
    
      this.offres = off;
      this.tempOffres = off;
      this.offres.forEach(element => {
     if (  this.jobsType.find( x  => x == element.jobeType) === undefined && element.jobeType ) {
      this.jobsType.push(element.jobeType);
    
     }

     if (  this.recruteurs.find( x  => x == element.recruteur.nom) === undefined && element.recruteur.nom) {
      this.recruteurs.push(element.recruteur.nom);
     }

     if (  this.locations.find( x  => x == element.location) === undefined && element.location) {
      this.locations.push(element.location);
     }


     if (  this.experiences.find( x  => x == element.experience) === undefined && element.experience) {
      this.experiences.push(element.experience);
     }
  
    });
 
    
      });

  
    
    
    
  }

  
search(event :any , name : string){

  

 
if (event.target.value =='All' ) {
 
  this.offres = this.tempOffres;
}
else {

  if (name == 'Recruteur'  ) {
    let data = this.offres.filter(x => x.recruteur.nom == event.target.value) ;
     this.offres = [...data];
}
if (name == 'jobtype' ) {

  if (event.target.value != ''  && event.target.checked) {

  
    let data = this.offres.filter(x => x.jobeType == event.target.value) ;
    this.offres = [...data];
  }
  else {
    this.offres = this.tempOffres;
  }
 
}

if (name == 'Location') {
  let data = this.offres.filter(x => x.location == event.target.value) ;
   this.offres = [...data];
}

if (name == 'experiencetype' ) {

  if (event.target.value != ''  && event.target.checked) {

  
    let data = this.offres.filter(x => x.experience == event.target.value) ;
    this.offres = [...data];
  }
  else {
    this.offres = this.tempOffres;
  }
 
}



}
 
 
 
 
 
  
}



serachTodayOffers(event : any  ){



  
      if( event.target.value != ''  && event.target.checked   ) {
        let currentDay=new Date().getDate();
        let currentMonth=new Date().getMonth();
        let currentYear=new Date().getFullYear()
      
        console.log("today  job");
     
        let data = this.offres.filter(x => new Date(x.postedDate).getMonth()==currentMonth   && new Date(x.postedDate).getDate()==currentDay && new Date(x.postedDate).getFullYear()==currentYear ) ;
    
        this.offres = [...data];
      } 
      else{ this.offres = this.tempOffres;}
   
  
 
  

}



serachTwodayOffers(event : any){

  if (event.target.value != ''  && event.target.checked) {
    console.log("two days");
    let currentDate =new Date() ;
    let currentDay=new Date().getDate();
    let yesterday =new Date().getDate()-1  ;
    let currentMonth=new Date().getMonth();
    let currentYear=new Date().getFullYear()
  

 
    let data = this.offres.filter(x => new Date(x.postedDate).getMonth()==currentMonth   &&(new Date(x.postedDate).getDate()==currentDay || new Date(x.postedDate).getDate() ==yesterday)  && new Date(x.postedDate).getFullYear()==currentYear ) ;

    this.offres = [...data];
  }
  else {this.offres = this.tempOffres;}
}


serachThisWeekOffers(event : any){

  if (event.target.value != ''  && event.target.checked) {
    console.log("this week");
 
    let currentDay=new Date().getDate();

    let currentMonth=new Date().getMonth();
    let currentYear=new Date().getFullYear();
  

 
    let data = this.offres.filter(x => new Date(x.postedDate).getMonth()==currentMonth   &&( currentDay - new Date(x.postedDate).getDate()  < 7 )  && new Date(x.postedDate).getFullYear()==currentYear ) ;

    this.offres = [...data];
  }
  else {this.offres = this.tempOffres;}
}


serachThisMonthOffers(event : any){

  if (event.target.value != ''  && event.target.checked) {
    console.log("this month");
 
    let currentDay=new Date().getDate();

    let currentMonth=new Date().getMonth();
    let currentYear=new Date().getFullYear();
  

 
    let data = this.offres.filter(x => new Date(x.postedDate).getMonth()==currentMonth  && new Date(x.postedDate).getFullYear()==currentYear ) ;

    this.offres = [...data];
  }
  else {this.offres = this.tempOffres;}
}


}

import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Offre } from '../models/offre';
import { OffreService } from '../services/OffreSrevice/offreservice.service';

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
  recruteurSearch  =  '';
  jobtypeSearch: any[] = [];
  recruteurs : any[] = ["All"];

  locations  : any[] = ["All"];

  experiences  : any[] = ["All"];

  offersbydate : any[] = ["All"];
  p : number =1;
  constructor(private listOffreService : OffreService) { 
    

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
    this.offres = this.tempOffres;
    // variable globale sera paratgé 
    this.recruteurSearch = event.target.value;
    let data = this.offres.filter(x => x.recruteur.nom == event.target.value) ;
    this.offres = [...data];
    
    // if checkbox is not empty 
    
    if (this.jobtypeSearch.length == 1 ) {
      // one value has selected 
        data = this.offres.filter(x => x.jobeType ==  this.jobtypeSearch[0]);
        this.offres = [...data];
     }
     else if (this.jobtypeSearch.length > 1 ) {
        let data1 =  this.offres.filter(x => x.jobeType ==  (this.jobtypeSearch[0])   )
        let data2 = this.offres.filter(x => x.jobeType ==  (this.jobtypeSearch[1])   ) ;
        this.offres  = [ ...data2, ...data1];
  
     }
}
if (name == 'jobtype' ) {
  

  if (event.target.value != ''  && event.target.checked) {
    let option :any = '' ;
    // recupérer array comme valeur globale
    this.jobtypeSearch.push(event.target.value) ;
    let data :any[] = [] ;
  
  if (this.jobtypeSearch.length == 1 ) {
    this.offres = this.tempOffres;
     data = this.offres.filter(x => x.jobeType ==  this.jobtypeSearch[0 ]);
     if (this.recruteurSearch !== '') {
      let data1 = data.filter(x => x.recruteur.nom ==this.recruteurSearch) ;
      this.offres = [...data1];
   }
   else{
    this.offres = [...data];
   }

     
  }
  else if (this.jobtypeSearch.length > 1 ) {

    this.offres = this.tempOffres;
     let data1 =  this.offres.filter(x => x.jobeType ==  (this.jobtypeSearch[0 ])  )
     let data2 = this.offres.filter(x => x.jobeType ==  (this.jobtypeSearch[1])  ) ;
     this.offres  = [ ...data2, ...data1];
     if (this.recruteurSearch !== '') {
      data =  this.offres.filter(x => x.recruteur.nom ==this.recruteurSearch) 
      this.offres = [...data];
      console.log(data);

   }
  }
 
    
   
  }
       // when deselection jobtype

  else {
    let data :any[] = [] ;
    this.offres = this.tempOffres;
    // delete elemet déséléctionner 
    this.jobtypeSearch =  this.jobtypeSearch.filter(x => x !==  event.target.value);
    console.log( this.jobtypeSearch);
    
    if (this.jobtypeSearch.length == 0) {
       if (this.recruteurSearch !== '') {
        let data1 = this.offres.filter(x => x.recruteur.nom ==this.recruteurSearch) ;
        this.offres = [...data1];
     }
    }
    else if (this.jobtypeSearch.length == 1 ) {
       let data1 =  this.offres.filter(x => x.jobeType ==  (this.jobtypeSearch[0 ])  )
       this.offres  = [ ...data1];
       if (this.recruteurSearch !== '') {
        data =  this.offres.filter(x => x.recruteur.nom ==this.recruteurSearch) 
        this.offres = [...data];
     }
    }

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
    let data :any[] = [] ;
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

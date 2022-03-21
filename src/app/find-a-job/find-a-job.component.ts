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
   // console.log( this.recruteurs);
   //console.log(this.jobsType);
    //console.log( this.locations);

    console.log( this.experiences);
      });

      // this.JobType=this.listOffreService.listJobType(); 

  
    
    
    
  }

  
search(event :any , name : string){

  

 
if (event.target.value =='All') {
 
  this.offres = this.tempOffres;
}
else {

  if (name == 'Recruteur') {
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

}

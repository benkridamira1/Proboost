import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Offre } from '../models/offre';
import { OffreService } from '../services/OffreSrevice/offreservice.service';
import { AuthenticationService } from '../services/authentication.service';

import { CVService } from '../services/CvService/cv.service';
import { cv } from '../models/cv';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  id !: any;
  joboffer !:  Offre ; 

  posted !:any;
   fileInfos: cv[]=[];
   p : number =1;
    isButtonVisible = false;
    currentuser:any;



  constructor(private activatedroute:ActivatedRoute ,  public  crudApi : OffreService , private uploadService: CVService
    ,private authService : AuthenticationService) { }

  ngOnInit(): void {

    this.authService.CurrentUser().subscribe(res =>{
      this.currentuser = res ;
    });
     

    this.activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id'); 
  });
  this.crudApi.getOffreByID(this.id).subscribe(data => { this.joboffer=<Offre>data});

  this.posted = this.joboffer.postedDate;

  this.uploadService.getFiles(this.id).subscribe(data=>this.fileInfos=data);

  console.log( "id=",  this.id);
 


  }


  deleteOffre(){
    this.crudApi.deleteOffre(this.id).subscribe(data=>{
      console.log("joboffer deleted");
    })
  }

  updateOffre(off : Offre){
    this.crudApi.updateOffre(off, this.currentuser.id).subscribe(data=>{
      console.log("joboffer updated");
    });

  }


  showCVS(){
    this.isButtonVisible=true;
    this.uploadService.getFiles(this.id).subscribe(data=>this.fileInfos=data);

  }

}

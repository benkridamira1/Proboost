import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Offre } from '../models/offre';
import { OffreService } from '../services/OffreSrevice/offreservice.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  id !: any;
  joboffer !:  Offre ; 

  posted !:any;

  constructor(private activatedroute:ActivatedRoute ,  public  crudApi : OffreService) { }

  ngOnInit(): void {

    this.activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id'); 
  });
  this.crudApi.getOffreByID(this.id).subscribe(data => { this.joboffer=<Offre>data});
  this.posted = this.joboffer.postedDate
 
  }


  deleteOffre(){
    this.crudApi.deleteOffre(this.id).subscribe(data=>{
      console.log("joboffer deleted");
    })
  }

}

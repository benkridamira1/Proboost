import { Component, OnInit } from '@angular/core';
import { Offre } from '../models/offre';
import { ListOffreService } from '../services/list-offre/list-offre.service';

@Component({
  selector: 'app-find-a-job',
  templateUrl: './find-a-job.component.html',
  styleUrls: ['./find-a-job.component.css']
})
export class FindAJobComponent implements OnInit {

  offres !: Offre[];


  constructor(private listOffreService : ListOffreService) { 
    
  }

  ngOnInit(): void {

    this.listOffreService.listeOffre().subscribe(prods => {
      console.log(prods);
      this.offres = prods;
      });
      
  }

}

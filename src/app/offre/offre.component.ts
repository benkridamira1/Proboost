import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Offre } from '../models/offre';
import { AuthenticationService } from '../services/authentication.service';
import { ListOffreService } from '../services/list-offre/list-offre.service';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {
 list : any;
 user !: any ;
 listuser : any ;
  constructor(private offreservice : ListOffreService,private authService : AuthenticationService
    ,private router : Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem('access_token')){
      this.router.navigate(['/login']);

    }
     this.authService.CurrentUser().subscribe(
       data => this.user = data
     ) ;
     this.offreservice.listeOffre().subscribe(
      data => this.list = data
    );

    this.authService.Users().subscribe(
      data=>this.listuser = data
      
      
    );
  }
logout(){
  console.log(this.listuser);

  

}



}

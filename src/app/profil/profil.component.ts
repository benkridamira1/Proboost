import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  user : any ;

  constructor(private authService : AuthenticationService,private router :Router) { 
    
   }

  ngOnInit(): void {

    if(!this.isLogged()){
      this.router.navigate(['/login']);
    }
    this.authService.CurrentUser().subscribe(
      data => this.user = data
    ) ;
  }

  isLogged():boolean{
    if(!localStorage.getItem('access_token')){
      return false ;

    }
    return true ;
  }

}

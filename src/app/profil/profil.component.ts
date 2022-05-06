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
  date !: any ;

  constructor(private authService : AuthenticationService,private router :Router) { 
    
   }

  ngOnInit(): void {

    if(!this.isLogged()){
      this.router.navigate(['/login']);
    }
    //to logout if the token expire
    if(this.authService.isLogged()){
      this.authService.CurrentUser().subscribe(res =>{
        this.user = res ;
      },error=>{
        this.authService.logout();
        window.location.reload();
      })
    }//end
  }

  isLogged():boolean{
    if(!localStorage.getItem('access_token')){
      return false ;

    }
    return true ;
  }

}

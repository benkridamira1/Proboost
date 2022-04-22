import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router : Router,private authService : AuthenticationService) { }
islogged !: boolean ;
  ngOnInit(): void {
    
    
 
    
  }

  logout(){
    console.log("logout works");
    this.authService.logout() ;
    this.router.navigate(['/login']);
    
  
  }

  isLogged():boolean{
    if(!localStorage.getItem('access_token')){
      return false ;

    }
    return true ;
  }

}

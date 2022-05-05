import { not } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser !: any ;
  currentrole:any;
  notif:any;
  constructor(private router : Router,private authService : AuthenticationService,
    private notifservice:NotificationService) { }
islogged !: boolean ;
  ngOnInit(): void {
    
    this.authService.CurrentUser().subscribe(res =>{
      this.currentrole=res.role;
      this.getnotif(res.id)
      console.log(this.notif);
      this.currentUser = res
    })
     
    
  }

  getnotif(id:any)
  {
    this.notifservice.getnotif(id).subscribe(res =>{
       this.notif=res;
    })
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

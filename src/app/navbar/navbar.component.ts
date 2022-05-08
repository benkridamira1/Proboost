import { not } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  //currentUser !: any ;
  currentrole:any;
  notif:any;
  currentuser:any;
  interviewalerts:any=[];
  screenalerts:any=[];
  i=0;
  j=0;
  constructor(private router : Router,private authService : AuthenticationService,private notifservice:NotificationService) { }
islogged !: boolean ;
  ngOnInit(): void {

    
    
     this.getrole() ;
     this.isLogged();
     
    interval(3000).subscribe(()=>{
      this.getrole();
    });

    if(this.authService.isLogged()){
      this.authService.CurrentUser().subscribe(res =>{
        this.currentuser = res ;
      })}
      


  }


  getrole()
  {
    this.authService.CurrentUser().subscribe(res =>{
      this.currentrole=res.role;
      this.currentuser=res;
      this.i=0;
      this.j=0;
      this.currentuser.alerts.map((data:any) =>{
        if(data.type=="interview")
        {
          this.interviewalerts[this.i]=data;
          this.i++;
        }
        if(data.type=="screen")
        {
          this.screenalerts[this.j]=data;
          this.j++;
        }
      })
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
      return false;
      
      

    }
    document.getElementById("log")?.remove();
    return true;
  
  }


  read(type:any)
  {
    this.notifservice.openall(type).subscribe();
    if(type=="interview")
    {
    this.router.navigateByUrl('Interviewrq');
    }
    else
    {
      this.router.navigateByUrl('Videochatrq')
    }
    
  }




  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }


}

import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  users : any ;
  currentuser : any ;
  total !: number ;
  p:number = 1 ;



  

  constructor(private authService : AuthenticationService , private route : Router) { }

  ngOnInit(): void {
     //to logout if the token expire
     if(this.authService.isLogged()){
      this.authService.CurrentUser().subscribe(res =>{
        this.currentuser = res ;
      },error=>{
        this.authService.logout();
        window.location.reload();
      })

   

    }else{
      this.route.navigate(['/login'])
    }//end


    this.authService.Users().subscribe(
      (data) => {
        this.users = data;
        this.total = data.length;
      console.log(this.total);
      
      },error=>{
        this.route.navigate(['/'])
      }
    )

 /*    this.authService.CurrentUser().subscribe(
      data => this.currentuser = data
    ) */

   
  }

  getUsers(){
    this.authService.Users()
      .subscribe((data) => {
        this.users = data;
        this.total = data.length;
      });
}

  toAdmin(id : any){
    console.log(id);
    
    this.authService.toAdmin(id).subscribe(
      data=>{data = data
      window.location.reload();}

      ,
      err => console.log('e' + err)
      
      
    ) ;
  }

  toUser(id : any){
    console.log(id);
    
    this.authService.toUser(id).subscribe(
      data=>{data = data
      window.location.reload();}

      ,
      err => console.log('e' + err)
      
      
    ) ;
  }

  toEmployer(id : any){
    console.log(id);
    
    this.authService.toEmployer(id).subscribe(
      data=>{data = data
      window.location.reload();}

      ,
      err => console.log('e' + err)
      
      
    ) ;
  }

  locked(id : any){
    console.log(id);
    
    this.authService.locked(id).subscribe(
      data=>{data = data
      window.location.reload();}

      ,
      err => console.log('e' + err)
      
      
    ) ;
  }
  pageChangeEvent(event: number){
    this.p = event;
    this.getUsers();
}







}

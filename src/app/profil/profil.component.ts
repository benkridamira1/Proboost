import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  user : any ;
  date !: any ;

  updatereq : any ;
    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";

    updateForm = new FormGroup({
      prenom : new FormControl('',Validators.required),
      nom : new FormControl('',Validators.required),
      date: new FormControl('',Validators.required),
    })

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

  update(){
    //this.user.date = this.updateForm.get('date')?.value ;

    console.log(this.user);
    
    return this.authService.updateUser(this.user).subscribe((data)=> console.log(data) );
    
  }

}

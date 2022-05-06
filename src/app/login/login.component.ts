import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from '../models/login-request.model';
import { AuthenticationService } from '../services/authentication.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";
  echec !: string ;

  loginForm : FormGroup = new FormGroup({
    username : new FormControl('',[Validators.pattern(this.emailPattern),Validators.required]),
    password : new FormControl('',Validators.required)
  }) ;

  loginRequest : LoginRequest = new LoginRequest() ;

  get loginControls(){return this.loginForm.controls}

  constructor(private authservice : AuthenticationService, private router : Router) { }

  ngOnInit(): void {

    if(this.isLogged()){
      this.router.navigate(['/'])
    }
    /**this.loginForm = new FormGroup({
      username : new FormControl('',[Validators.pattern(this.emailPattern),Validators.required]),
      password : new FormControl('',Validators.required)
    })*/
  }

  isLogged():boolean{
    if(!localStorage.getItem('access_token')){
      return false ;

    }
    return true ;
  }

  login(){

    console.log(this.loginRequest.username);
    console.log(this.loginRequest.password);
    

    this.authservice.login(this.loginRequest).subscribe(success => {
      if(success){
        
        
        this.router.navigate(['/profil'])
        .then(() => {
          window.location.reload();
         });
      }
    },(error)=>{
      console.log(error);
      this.echec = error ;
    });

  }

  test(){
    this.echec = "Hello" ;
  }

}

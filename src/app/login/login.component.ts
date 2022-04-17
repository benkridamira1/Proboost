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
    /**this.loginForm = new FormGroup({
      username : new FormControl('',[Validators.pattern(this.emailPattern),Validators.required]),
      password : new FormControl('',Validators.required)
    })*/
  }

  login(){

    console.log(this.loginRequest.username);
    console.log(this.loginRequest.password);
    

    this.authservice.login(this.loginRequest).subscribe(success => {
      if(success){
        
        this.router.navigate(['/offre']) ;
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

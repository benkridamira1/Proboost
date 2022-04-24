import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { registerRequest } from '../models/registration/register-request/registerRequest';
import { RegisterService } from '../services/register.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {




    regreq : registerRequest = new registerRequest();
    err !: string ; 
    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";
    token = localStorage.getItem('access_token');

    registerForm = new FormGroup({
      firstname : new FormControl('',Validators.required),
      lastname : new FormControl('',Validators.required),
      email : new FormControl('',[Validators.pattern(this.emailPattern),Validators.required]),
      password : new FormControl('',Validators.required)
    })



  constructor(private registerService : RegisterService
    ,private router :Router) { }

  ngOnInit(): void {
    if(this.isLogged()){
      this.router.navigate(['/']);
    }
  }
  isLogged():boolean{
    if(!localStorage.getItem('access_token')){
      return false ;

    }
    return true ;
  }
register(){
   this.registerService.register(this.regreq).subscribe((data)=>
   {
     console.log('it works');
     this.router.navigateByUrl("/login");
     
   },(error)=>{
     console.log(error);
     this.err = error ;
   });
   //this.router.navigateByUrl("/login");
    
}

get email(){return this.registerForm.get('email')?.invalid;}

}

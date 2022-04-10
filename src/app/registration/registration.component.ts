import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { registerRequest } from '../models/registration/register-request/registerRequest';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {




    regreq : registerRequest = new registerRequest();



  constructor(private registerService : RegisterService
    ,private router :Router) { }

  ngOnInit(): void {
  }
register(){
   this.registerService.register(this.regreq).subscribe();
 
    this.router.navigateByUrl("/login");
}

onSubmit() {
  // some stuff
  this.router.navigate(['/login']);
}

}

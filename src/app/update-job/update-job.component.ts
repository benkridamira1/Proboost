
import {FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators } from '@angular/forms';
// import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Offre } from '../models/offre';
import { OffreService } from '../services/OffreSrevice/offreservice.service';
import { AuthenticationService } from '../services/authentication.service';

import { Component, OnInit } from '@angular/core';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-update-job',
  templateUrl: './update-job.component.html',
  styleUrls: ['./update-job.component.css']
})
export class UpdateJobComponent implements OnInit {

  submitted = false;

newoffre : Offre = new Offre();

oldoffre  : Offre = new Offre();
id !:any;
offres : Offre[] = [];
currentuser:any;



  constructor( public  crudApi : OffreService ,public fb: FormBuilder , private authService : AuthenticationService  , private router : Router  , private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {


    this.authService.CurrentUser().subscribe(res =>{
      this.currentuser = res ;
    });

   //    this.infoForm();  
   
       this.activatedroute.paramMap.subscribe(params => { 
        this.id = params.get('id'); 
    });


    this.crudApi.getOffreByID(this.id).subscribe(data => { this.oldoffre=<Offre>data ; console.log(this.oldoffre);});



  

  }
  get f() { return this.crudApi.dataForm.controls; }
  


  update(){

    console.log(this.oldoffre);
    this.crudApi.updateOffre(this.oldoffre,this.currentuser.id).subscribe(off=>{
      this.router.navigate(['FindAJob/job_details/',this.id]);
    }, (error)=>{alert("Problème lors de la modification")}) }


}

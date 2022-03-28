import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators } from '@angular/forms';
// import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Offre } from '../models/offre';
import { OffreService } from '../services/OffreSrevice/offreservice.service';




@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {


newoffre : Offre = new Offre();




  constructor( public  crudApi : OffreService ,public fb: FormBuilder  , private router : Router ) { }

  ngOnInit(): void {
 /*    if (this.crudApi.choixmenu == "A")
    {this.infoForm()}; */

    this.newoffre.postedDate=new Date();
   // this.newoffre.recruteur.id = 1;
  }

  
  addOffre(){
    //this.newoffre.deadline =  '2022-03-28T17:42:40.357Z';
    this.newoffre.deadline =  this.newoffre.deadline+ 'T17:42:40.357Z';

    this.crudApi.addOffre(this.newoffre).subscribe(off=>
       { console.log(off);
      });
      this.router.navigate(['FindAJob']);
  }


/* 
  infoForm() {
    this.crudApi.dataForm = this.fb.group({
        id: null,
        title: ['', [Validators.required]],
        description: ['', [Validators.required,Validators.maxLength(500)]],
        deadline: ['', [Validators.required]],
        jobeType: ['', [Validators.required, Validators.minLength(5)]],
        location: ['', [Validators.required, Validators.minLength(5)]],
        experience: ['', [Validators.required]],
        salary: ['', [Validators.required]],
       
    
        });
    }

    ResetForm() {
      this.crudApi.dataForm.reset();
  }


  onSubmit() {
    if (this.crudApi.choixmenu == "A")
    {
      this.addOffre();
    }
    else
    {
      
     this.updateData()
    }
   
}

addOffre() {
  this.crudApi.addOffre(this.crudApi.dataForm.value).
  subscribe( data => {
   // this.toastr.success( 'Validation Faite avec Success'); 
    this.router.navigate(['FindAJob']);
  });
}


updateData(){
  console.log("hello");
} */
  /* addOffre(){
  
    this.addOffreService.addOffre(this.newoffre).subscribe(off=> { console.log(off);});
    this.router.navigate(['FindAJob']);  
  } */


  

}

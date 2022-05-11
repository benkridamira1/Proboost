
import { Component, OnInit  ,Inject} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators } from '@angular/forms';
// import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Offre } from '../models/offre';
import { OffreService } from '../services/OffreSrevice/offreservice.service';
import { AuthenticationService } from '../services/authentication.service';

import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {

  submitted = false;

newoffre : Offre = new Offre();
currentuser:any;





  constructor( public  crudApi : OffreService ,public fb: FormBuilder, private authService : AuthenticationService  , private router : Router ) { }

  ngOnInit(): void {
   //  if (this.crudApi.choixmenu == "A")
       this.infoForm();  

       this.authService.CurrentUser().subscribe(res =>{
        this.currentuser = res ;
      });
       

   // this.newoffre.postedDate=new Date();
   // this.newoffre.recruteur.id = 1;
  }

  get f() { return this.crudApi.dataForm.controls; }


  /* addOffre(){
    //this.newoffre.deadline =  '2022-03-28T17:42:40.357Z';
    //this.newoffre.deadline =  this.newoffre.deadline+ 'T17:42:40.357Z';


    this.crudApi.addOffre(this.newoffre).subscribe(off=>
       { console.log(off);
      });
      this.router.navigate(['FindAJob']);
  }  */
 


  infoForm() {
    this.crudApi.dataForm = this.fb.group({
        id: null,
        title: ['', [Validators.required]],
        description: ['', [Validators.required]],
        requiredKnowledge: ['', [Validators.required]],
        education: ['', [Validators.required]],
        jobeType: ['', [Validators.required]],
        location: ['', [Validators.required]],
        experience: ['', [Validators.required]],
        salary: ['', [Validators.required]],
        vacancy: ['', [Validators.required]],
        deadline: ['', [Validators.required]]
        
  
        });
    }
    onReset() {
      this.submitted = false;
        this.crudApi.dataForm.reset();
    }

    onSubmit() {
    

      console.log(this.currentuser.id);

      this.submitted = true;
      console.log("amira");
      if( this.crudApi.dataForm.invalid){
        console.log("invalid");

        return ;
      }
      const val = this.crudApi.dataForm.value;

     

        if (this.crudApi.choixmenu == "A")
        {
          this.addData();
        }
        else
        {
         this.updateData()
        }

  }

  addData() {
    const formData = new FormData();
      
      const offers = this.crudApi.dataForm.value;
      formData.append('offer', JSON.stringify(offers));
      
      


      this.crudApi.addOffre(offers,this.currentuser.id).subscribe( data => {
      console.log( 'Validation Faite avec Success'); 
      this.router.navigate(['/FindAJob']);
    });
  }

  updateData(){
    console.log("hello");
  } 
    

  /*   infoForm() {
      this.crudApi.dataForm = this.fb.group({
          id: null,
          title: ['', [Validators.required, Validators.minLength(5)]],
          description: ['', [Validators.required,Validators.maxLength(500)]],
          requiredKnowledge: ['', [Validators.required,Validators]],
          education: ['', [Validators.required,Validators]],
          jobeType: ['', [Validators.required, Validators.minLength(5)]],
          location: ['', [Validators.required, Validators.minLength(5)]],
          experience: ['', [Validators.required]],
          salary: ['', [Validators.required]],
          vacancy: ['', [Validators.required]],
          deadline: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]]
          
    
          });
      } */

 /*    ResetForm() {
      this.crudApi.dataForm.reset();
  }


  onSubmit() {
    if (this.crudApi.choixmenu == "A")
    {
      console.log("dans add");
      this.addOffre();
    }
    else
    {
      console.log("dans update");
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
 */
/* addOffre(){

  this.newoffre.deadline =  this.newoffre.deadline+ 'T17:42:40.357Z';


  this.crudApi.addOffre(this.crudApi.dataForm.value).subscribe(off=>
     { console.log("off ajouté");
    });
    this.router.navigate(['FindAJob']);
} 
 */

/* 
updateData(){
  console.log("hello");
}  */
  /* addOffre(){
  
    this.addOffreService.addOffre(this.newoffre).subscribe(off=> { console.log(off);});
    this.router.navigate(['FindAJob']);  
  } */


  

}

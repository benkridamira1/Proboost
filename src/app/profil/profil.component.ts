import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { HttpClient , HttpEventType } from '@angular/common/http';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  //******** */

  selectedFile !: File ;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message !: string ;
  imageName: any;
  //*********** */

  user : any ;
  date !: any ;

  updatereq : any ;
    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";

    updateForm = new FormGroup({
      prenom : new FormControl('',Validators.required),
      nom : new FormControl('',Validators.required),
      date: new FormControl('',Validators.required),
    })

  constructor(private authService : AuthenticationService,private router :Router,private httpClient: HttpClient) { 
    
   }

  ngOnInit(): void {

    if(!this.isLogged()){
      this.router.navigate(['/login']);
    }
    
    //to logout if the token expire
    if(this.authService.isLogged()){
      this.authService.CurrentUser().subscribe(res =>{
        this.user = res ;
        this.getImage();

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

  /******* */
    //Gets called when the user selects an image
    public onFileChanged(event: any) {
      //Select File
      this.selectedFile = event.target.files[0];
    }
  
  
    //Gets called when the user clicks on submit to upload the image
    onUpload() {
      console.log(this.selectedFile);
      
      //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
      const uploadImageData = new FormData();
      uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    
      //Make a call to the Spring Boot Application to save the image
      this.httpClient.post('http://localhost:3000/image/upload', uploadImageData, { observe: 'response' })
        .subscribe((response) => {
          if (response.status === 200) {
            this.message = 'Image uploaded successfully';
            
          } else {
            this.message = 'Image not uploaded successfully';
          }
        }
        );
        window.location.reload();
        
  
  
    }
  
      //Gets called when the user clicks on retieve image button to get the image from back end
      getImage() {
      //Make a call to Sprinf Boot to get the Image Bytes.
      this.authService.getImage(this.user.image)
        .subscribe(
          res => {
            this.retrieveResonse = res;
            this.base64Data = this.retrieveResonse.picByte;
            this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
          }
        );
    }
  
  /******* */

}

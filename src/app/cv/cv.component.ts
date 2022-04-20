import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { cv } from '../models/cv';
import { CVService } from '../services/CvService/cv.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileInfos: cv[]=[];
  p : number =1;
  url !:String;
  id !: any;




  constructor(private uploadService: CVService,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id'); 
  });

     this.uploadService.getFiles(this.id).subscribe(data=>this.fileInfos=data);

  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }


  upload(): void {
    this.progress = 0;
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;
        this.uploadService.upload(this.currentFile,this.id).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {

              console.log(this.fileInfos);
              this.message = event.body.message;
              this.uploadService.getFiles(this.id).subscribe(data=>this.fileInfos=data);

            }
          },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;
            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }
            this.currentFile = undefined;
          }
        });
      }
      this.selectedFiles = undefined;
    }
  }


download(id :number){
this.url="http://localhost:3000/files/"+id;

}


  
}

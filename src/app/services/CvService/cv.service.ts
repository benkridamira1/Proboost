import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { cv } from 'src/app/models/cv';


@Injectable({
  providedIn: 'root'
})
export class CVService {

  private getUrl = 'http://localhost:3000/offre';
  private baseUrl = 'http://localhost:3000';

 

  constructor(private http: HttpClient) { }

  upload(file: File , id: number , currentuser: number ): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `${this.baseUrl}/upload/${id}/${currentuser}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }

  getFiles(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.getUrl}/${id}/CVs`);
  }


  showFile(id: number): Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/showFile/${id}`);
  }
}

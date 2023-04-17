import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';
import { About } from '../models/about';
import { Banner } from '../models/banner';
import { Email } from '../models/email';
import { AboutEdit } from '../models/about-edit';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private urlAPI: string = 'https://portfolio-backend-5f50.onrender.com/persons';

  constructor(private http: HttpClient) { }

  getBanner(): Observable<Banner>{
    return this.http.get<Banner>(this.urlAPI + "/banner");
  }

  getContact(): Observable<Contact>{
    return this.http.get<Contact>(this.urlAPI + "/contact");
  }

  getAbout(): Observable<About>{
    return this.http.get<About>(this.urlAPI + "/about");
  }

  sendEmail(email: Email){
    return this.http.post<Map<string, string>>(this.urlAPI + "/contact", email);
  }

  editBanner(formData: FormData){
    const token = localStorage.getItem('jwt-token');
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
   this.http.patch<Banner>(this.urlAPI + "/banner", formData, { headers }).subscribe();
  }

  deleteBanner(){
    const token = localStorage.getItem('jwt-token');
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
    this.http.delete(this.urlAPI + "/banner", { headers }).subscribe();
  }

  deleteAbout(){
    const token = localStorage.getItem('jwt-token');
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
    this.http.delete(this.urlAPI + "/about", { headers }).subscribe();
  }

  editAbout(aboutEdit: AboutEdit){
    const token = localStorage.getItem('jwt-token');
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
    this.http.patch(this.urlAPI + "/about", aboutEdit, { headers }).subscribe();
  }

}

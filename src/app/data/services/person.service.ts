import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';
import { About } from '../models/about';
import { Banner } from '../models/banner';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private urlAPI: string = 'http://localhost:8080/persons';

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

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Technology } from '../models/technology';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TechnologyRequest } from '../models/technology-request';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  private urlAPI: string = 'https://portfolio-backend-5f50.onrender.com/technologies';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Technology[]>{
    return this.http.get<Technology[]>(this.urlAPI);
  }

  edit(id: number, techRequest: TechnologyRequest){
    if(id){
      let url = this.urlAPI + "/" + id;
      const token = localStorage.getItem('jwt-token');
      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      });
      this.http.put(url, techRequest, { headers });
    }
  }

  delete(id: number){
    if(id){
      let url = this.urlAPI + "/" + id;
      const token = localStorage.getItem('jwt-token');
      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + token
      });
      this.http.delete(url, { headers }).subscribe();
    }
  }

  create(techRequest: TechnologyRequest){
    const token = localStorage.getItem('jwt-token');
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    });
    this.http.post(this.urlAPI, techRequest, { headers }).subscribe();
  }

}

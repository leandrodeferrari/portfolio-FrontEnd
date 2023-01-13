import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Technology } from '../models/technology';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  private urlAPI: string = 'http://localhost:8080/technologies';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Technology[]>{
    return this.http.get<Technology[]>(this.urlAPI);
  }

}

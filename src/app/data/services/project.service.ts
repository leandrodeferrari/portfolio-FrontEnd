import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private urlAPI: string = 'https://portfolio-backend-5f50.onrender.com/projects';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Project[]>{
    return this.http.get<Project[]>(this.urlAPI);
  }

}

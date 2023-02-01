import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private urlAPI: string = 'https://portfolio-backend-5f50.onrender.com/courses';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Course[]>{
    return this.http.get<Course[]>(this.urlAPI);
  }

}

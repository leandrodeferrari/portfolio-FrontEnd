import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Work } from '../models/work';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  private urlAPI: string = 'https://portfolio-backend-5f50.onrender.com/job-experiences';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Work[]>{
    return this.http.get<Work[]>(this.urlAPI);
  }

}

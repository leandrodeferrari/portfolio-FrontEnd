import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Career } from '../models/career';

@Injectable({
  providedIn: 'root'
})
export class CareerService {

  private urlAPI: string = 'https://portfolio-backend-5f50.onrender.com/careers';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Career[]>{
    return this.http.get<Career[]>(this.urlAPI);
  }

}

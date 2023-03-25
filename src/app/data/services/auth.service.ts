import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, tap } from 'rxjs';
import { LoginRequest } from '../models/login-request';
import { LoginResponse } from '../models/login-response';

const TOKEN_KEY = 'jwt-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlAPI: string = 'https://portfolio-backend-5f50.onrender.com/auth';

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.urlAPI + "/login", credentials).pipe(
      tap(res => localStorage.setItem(TOKEN_KEY, res.token))
    );
  }

  logout() {
    localStorage.removeItem(TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem(TOKEN_KEY);
    return !this.jwtHelper.isTokenExpired(token);
  }

}

import { Component, OnInit } from '@angular/core';
import { LoginRequest } from 'src/app/data/models/login-request';
import { AuthService } from 'src/app/data/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: LoginRequest = { userNameOrEmail: '', password: '' };

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.login(this.credentials).subscribe();
  }

}

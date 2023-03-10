import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/data/models/login';
import { LoginService } from './../../data/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login?: Login;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  signIn(){
    this.loginService.login(this.login).subscribe(data => {
      console.log(data);
    });
  }

}

import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { LoginRequest } from 'src/app/data/models/login-request';
import { AuthService } from 'src/app/data/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('modalClose') modalClose: ElementRef | undefined;

  credentials: LoginRequest = { userNameOrEmail: '', password: '' };

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.login(this.credentials).subscribe();
    this.cerrarModal();
  }

  cerrarModal(){
    if(this.modalClose){
      this.modalClose.nativeElement.click();
    }
  }

}

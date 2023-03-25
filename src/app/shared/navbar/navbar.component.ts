import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { AuthService } from 'src/app/data/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogged: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isLogged = this.authService.isAuthenticated();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > 600) {
      element.classList.add('bg-dark');
    } else {
      element.classList.remove('bg-dark');
    }
  }

  login(){
    let isAuthenticated = this.authService.isAuthenticated();
    if(isAuthenticated){
      this.isLogged = true;
    }
  }

  logout(){
    this.authService.logout();
    this.isLogged = false;
  }

}

import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/data/models/banner';
import { AuthService } from 'src/app/data/services/auth.service';
import { PersonService } from 'src/app/data/services/person.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  banner?: Banner;

  constructor(private personService: PersonService, private authService: AuthService) { }

  ngOnInit(): void {
    this.personService.getBanner().subscribe(data => {
      this.banner = data;
    });
  }

  isAuth(): boolean{
    return this.authService.isAuthenticated();
  }

}

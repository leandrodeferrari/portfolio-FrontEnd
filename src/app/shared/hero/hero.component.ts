import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/data/models/banner';
import { PersonService } from 'src/app/data/services/person.service';
import Typed from 'typed.js';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  banner!: Banner;

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.personService.getBanner().subscribe(data => {
      this.banner = data;
    });

    const options = {
      strings: ['Java Developer'],
      typeSpeed: 90,
      backSpeed: 90,
      showCursor: true,
      cursorChar: '|',
      loop: true
    };

    const typed: Typed = new Typed('.typed-element', options);
  }

}

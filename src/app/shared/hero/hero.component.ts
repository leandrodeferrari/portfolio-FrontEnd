import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

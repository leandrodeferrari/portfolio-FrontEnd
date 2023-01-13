import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/data/models/about';
import { PersonService } from 'src/app/data/services/person.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  about!: About;

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.personService.getAbout().subscribe(data => {
      this.about = data;
    });
  }

}

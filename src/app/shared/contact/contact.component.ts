import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/data/models/contact';
import { PersonService } from 'src/app/data/services/person.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact?: Contact;

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.personService.getContact().subscribe(data => {
      this.contact = data;
    });
  }

}

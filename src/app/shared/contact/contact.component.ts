import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/data/models/contact';
import { Email } from 'src/app/data/models/email';
import { PersonService } from 'src/app/data/services/person.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact?: Contact;
  email: Email = {name: '', subject: '', message: '', email: ''};
  response!: Map<string, string>;

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.personService.getContact().subscribe(data => {
      this.contact = data;
    });
  }

  onSubmit(){
    this.personService.sendEmail(this.email).subscribe(data => {
      this.response = data;
   });
  }

}

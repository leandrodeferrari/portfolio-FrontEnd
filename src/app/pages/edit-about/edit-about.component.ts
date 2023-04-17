import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { AboutEdit } from 'src/app/data/models/about-edit';
import { PersonService } from 'src/app/data/services/person.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {

  @ViewChild('modalEditAbout') modalEditAbout: ElementRef | undefined;

  editAbout: AboutEdit = { firstName: '', lastName: '', title: '', aboutMe: ''};

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
  }

    onSubmit(){
    this.personService.editAbout(this.editAbout);
    this.cerrarModal();
  }

  cerrarModal(){
    if(this.modalEditAbout){
      this.modalEditAbout.nativeElement.click();
    }
  }

}

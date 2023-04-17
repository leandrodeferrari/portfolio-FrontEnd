import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { PersonService } from 'src/app/data/services/person.service';

@Component({
  selector: 'app-edit-banner',
  templateUrl: './edit-banner.component.html',
  styleUrls: ['./edit-banner.component.css']
})
export class EditBannerComponent implements OnInit {

  @ViewChild('modalEditBanner') modalEditBanner: ElementRef | undefined;

  fileBanner: File | null = null;

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
  }

  onFile(event: any) {
    this.fileBanner = event.target.files[0];
  }

  onSubmit(){
    if(this.fileBanner){
      const formData = new FormData();
      formData.append('file', this.fileBanner);
      this.personService.editBanner(formData);
      this.cerrarModal();
    }
  }

  cerrarModal(){
    if(this.modalEditBanner){
      this.modalEditBanner.nativeElement.click();
    }
  }

}

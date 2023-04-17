import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { PersonService } from 'src/app/data/services/person.service';

@Component({
  selector: 'app-delete-banner',
  templateUrl: './delete-banner.component.html',
  styleUrls: ['./delete-banner.component.css']
})
export class DeleteBannerComponent implements OnInit {

  @ViewChild('modalDeleteBanner') modalDeleteBanner: ElementRef | undefined;

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.personService.deleteBanner();
    this.cerrarModal();
  }

  cerrarModal(){
    if(this.modalDeleteBanner){
      this.modalDeleteBanner.nativeElement.click();
    }
  }

}

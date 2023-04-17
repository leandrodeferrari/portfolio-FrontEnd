import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { TechnologyRequest } from 'src/app/data/models/technology-request';
import { TechnologyService } from 'src/app/data/services/technology.service';

@Component({
  selector: 'app-create-technology',
  templateUrl: './create-technology.component.html',
  styleUrls: ['./create-technology.component.css']
})
export class CreateTechnologyComponent implements OnInit {

  techRequest: TechnologyRequest = {name: '', logoUrl: ''};

  @ViewChild('modalCreateTech') modalCreateTech: ElementRef | undefined;

  constructor(private techService: TechnologyService) { }

  ngOnInit(): void {
  }

  create(){
    this.techService.create(this.techRequest);
    this.cerrarModal();
  }

  cerrarModal(){
    if(this.modalCreateTech){
      this.modalCreateTech.nativeElement.click();
    }
  }

}

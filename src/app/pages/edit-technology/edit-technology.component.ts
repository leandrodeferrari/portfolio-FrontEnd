import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
import { TechnologyRequest } from 'src/app/data/models/technology-request';
import { TechnologyService } from 'src/app/data/services/technology.service';

@Component({
  selector: 'app-edit-technology',
  templateUrl: './edit-technology.component.html',
  styleUrls: ['./edit-technology.component.css']
})
export class EditTechnologyComponent implements OnInit {

  techRequest: TechnologyRequest = {name: '', logoUrl: ''};

  @ViewChild('modalEditTech') modalEditTech: ElementRef | undefined;

  constructor(private techService: TechnologyService) { }

  ngOnInit(): void {
  }

  edit(){
    this.techService.edit(1, this.techRequest);
    this.cerrarModal();
  }

  cerrarModal(){
    if(this.modalEditTech){
      this.modalEditTech.nativeElement.click();
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Career } from 'src/app/data/models/career';
import { CareerService } from 'src/app/data/services/career.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

  careers!: Career[];

  constructor(private careerService: CareerService) { }

  ngOnInit(): void {
    this.careerService.getAll().subscribe(data => {
      this.careers = data;
    });
  }

}

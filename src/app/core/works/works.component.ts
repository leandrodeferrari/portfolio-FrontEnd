import { Component, OnInit } from '@angular/core';
import { Work } from 'src/app/data/models/work';
import { WorkService } from 'src/app/data/services/work.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  works?: Work[];

  constructor(private workService: WorkService) { }

  ngOnInit(): void {
    this.workService.getAll().subscribe(data => {
      this.works = data;
    });
  }

}

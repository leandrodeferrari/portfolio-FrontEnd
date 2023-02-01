import { Component, Input, OnInit } from '@angular/core';
import { Work } from 'src/app/data/models/work';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  @Input('work') work?: Work;

  constructor() { }

  ngOnInit(): void {
  }

}

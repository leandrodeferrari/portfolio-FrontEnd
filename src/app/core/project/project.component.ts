import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/data/models/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input('project') project?: Project;

  constructor() { }

  ngOnInit(): void {
  }

}

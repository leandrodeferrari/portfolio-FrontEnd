import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/data/models/project';
import { ProjectService } from 'src/app/data/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects!: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getAll().subscribe(data => {
      this.projects = data;
    });
  }

}

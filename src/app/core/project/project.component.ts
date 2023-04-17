import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/data/models/project';
import { AuthService } from 'src/app/data/services/auth.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input('project') project?: Project;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  isAuth(): boolean{
    return this.authService.isAuthenticated();
  }

}

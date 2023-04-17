import { Component, OnInit } from '@angular/core';
import { TechnologyService } from 'src/app/data/services/technology.service';
import { Technology } from './../../data/models/technology';
import { AuthService } from 'src/app/data/services/auth.service';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.css']
})
export class KnowledgeComponent implements OnInit {

  technologies?: Technology[];

  constructor(private techService: TechnologyService, private authService: AuthService) { }

  ngOnInit(): void {
    this.techService.getAll().subscribe(data => {
      this.technologies = data;
    });
  }

  isAuth(): boolean{
    return this.authService.isAuthenticated();
  }

}

import { Component, OnInit } from '@angular/core';
import { TechnologyService } from 'src/app/data/services/technology.service';
import { Technology } from './../../data/models/technology';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.css']
})
export class KnowledgeComponent implements OnInit {

  technologies?: Technology[];

  constructor(private techService: TechnologyService) { }

  ngOnInit(): void {
    this.techService.getAll().subscribe(data => {
      this.technologies = data;
    });
  }

}

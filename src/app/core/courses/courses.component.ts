import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/data/models/course';
import { CourseService } from './../../data/services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses?: Course[];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getAll().subscribe(data => {
      this.courses = data;
    });
  }

}

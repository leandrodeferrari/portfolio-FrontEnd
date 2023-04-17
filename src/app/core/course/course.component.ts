import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/data/models/course';
import { AuthService } from 'src/app/data/services/auth.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input('course') course?: Course;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  isAuth(): boolean{
    return this.authService.isAuthenticated();
  }

}

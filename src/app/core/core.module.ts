import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { StudiesComponent } from './studies/studies.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { WorksComponent } from './works/works.component';
import { WorkComponent } from './work/work.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './project/project.component';
import { CareersComponent } from './careers/careers.component';
import { CareerComponent } from './career/career.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [
    AboutMeComponent,
    StudiesComponent,
    KnowledgeComponent,
    ExperiencesComponent,
    WorksComponent,
    WorkComponent,
    ProjectsComponent,
    ProjectComponent,
    CareersComponent,
    CareerComponent,
    CoursesComponent,
    CourseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutMeComponent,
    StudiesComponent,
    KnowledgeComponent,
    ExperiencesComponent
  ]
})
export class CoreModule { }

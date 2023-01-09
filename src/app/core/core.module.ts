import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { StudiesComponent } from './studies/studies.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { ExperiencesComponent } from './experiences/experiences.component';

@NgModule({
  declarations: [
    AboutMeComponent,
    StudiesComponent,
    KnowledgeComponent,
    ExperiencesComponent
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

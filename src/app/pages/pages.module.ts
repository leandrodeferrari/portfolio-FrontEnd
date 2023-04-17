import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { EditBannerComponent } from './edit-banner/edit-banner.component';
import { DeleteBannerComponent } from './delete-banner/delete-banner.component';
import { EditAboutComponent } from './edit-about/edit-about.component';
import { EditTechnologyComponent } from './edit-technology/edit-technology.component';
import { CreateTechnologyComponent } from './create-technology/create-technology.component';

@NgModule({
  declarations: [
    LoginComponent,
    EditBannerComponent,
    DeleteBannerComponent,
    EditAboutComponent,
    EditTechnologyComponent,
    CreateTechnologyComponent
  ],
  imports: [
  CommonModule,
  FormsModule
  ],
  exports: [
    LoginComponent,
    EditBannerComponent,
    DeleteBannerComponent,
    EditAboutComponent,
    CreateTechnologyComponent,
    EditTechnologyComponent
  ]
})
export class PagesModule { }

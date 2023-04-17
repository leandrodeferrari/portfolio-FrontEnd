import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { EditBannerComponent } from './edit-banner/edit-banner.component';
import { DeleteBannerComponent } from './delete-banner/delete-banner.component';
import { EditAboutComponent } from './edit-about/edit-about.component';

@NgModule({
  declarations: [
    LoginComponent,
    EditBannerComponent,
    DeleteBannerComponent,
    EditAboutComponent
  ],
  imports: [
  CommonModule,
  FormsModule
  ],
  exports: [
    LoginComponent,
    EditBannerComponent,
    DeleteBannerComponent,
    EditAboutComponent
  ]
})
export class PagesModule { }

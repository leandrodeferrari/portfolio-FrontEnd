import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    HeroComponent,
    FooterComponent,
    ContactComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    HeroComponent,
    FooterComponent,
    ContactComponent,
    LoadingComponent
  ]
})
export class SharedModule { }



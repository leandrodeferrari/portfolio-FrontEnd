import { Component, Input, OnInit } from '@angular/core';
import { Work } from 'src/app/data/models/work';
import { AuthService } from 'src/app/data/services/auth.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  @Input('work') work?: Work;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  isAuth(): boolean{
    return this.authService.isAuthenticated();
  }

}

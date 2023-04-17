import { Component, Input, OnInit } from '@angular/core';
import { Career } from 'src/app/data/models/career';
import { AuthService } from 'src/app/data/services/auth.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  @Input('career') career?: Career;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  isAuth(): boolean{
    return this.authService.isAuthenticated();
  }

}

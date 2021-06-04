import { Component, Input, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-authorise-view',
  templateUrl: './authorise-view.component.html',
  styleUrls: ['./authorise-view.component.css']
})
export class AuthoriseViewComponent implements OnInit {

  constructor(private securityservice: SecurityService) { }

  ngOnInit(): void {
  }

  @Input()
  role: string;

  public isAuthorised() {
    if (this.role) {
      return this.role === this.securityservice.getRole();

    }
    else {
      return this.securityservice.isAuthenticated();
    }
  }

}

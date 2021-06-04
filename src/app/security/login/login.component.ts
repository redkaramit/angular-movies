import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userCredentials } from 'src/app/Models/security.model';
import { SecurityService } from 'src/app/services/security.service';
import { parseWebAPIErrors } from 'src/app/utilities/display-errors/utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private securityserice: SecurityService, private router : Router) { }
  errors: string[] = [];
  ngOnInit(): void {
  }

  login(userCredentials: userCredentials) {
    this.errors = [];
    this.securityserice.login(userCredentials).subscribe(authenticationResult => {
      this.securityserice.saveToken(authenticationResult);
      this.router.navigate(['/genres']);
    },error=> this.errors = parseWebAPIErrors(error));
  }

}

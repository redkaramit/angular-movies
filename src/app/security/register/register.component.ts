import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userCredentials } from 'src/app/Models/security.model';
import { SecurityService } from 'src/app/services/security.service';
import { parseWebAPIErrors } from 'src/app/utilities/display-errors/utils';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private securityserice: SecurityService, private router : Router) { }
  errors: string[] = [];
  ngOnInit(): void {
  }

  register(userCredentials: userCredentials) {
    this.errors = [];
    this.securityserice.register(userCredentials).subscribe(authenticationResult => {
      this.securityserice.saveToken(authenticationResult);
      this.router.navigate(['/genres']);
    },error=> this.errors = parseWebAPIErrors(error));
  }

}

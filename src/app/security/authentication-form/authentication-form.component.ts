import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userCredentials } from 'src/app/Models/security.model';

@Component({
  selector: 'app-authentication-form',
  templateUrl: './authentication-form.component.html',
  styleUrls: ['./authentication-form.component.css']
})
export class AuthenticationFormComponent implements OnInit {

  constructor(private formbuilder: FormBuilder) { }
  form: FormGroup;

  @Input()
  action: string = 'Register';

  @Output()
  onSubmit = new EventEmitter<userCredentials>();

  ngOnInit(): void {
    this.form = this.formbuilder.group(
      {
        email: ['', { Validators: [Validators.required, Validators.email] }],
        password: ['', { Validators: [Validators.required] }]
      }
    );
  }

  getEmailErrorMessage() {
    const field = this.form.get('email');
    if (field.hasError('required')) {
      return 'The name field is required';
    }
    if (field.hasError('email')) {
      return 'Invalid email address';
    }
    return '';
  }

}

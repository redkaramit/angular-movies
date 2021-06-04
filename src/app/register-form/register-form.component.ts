import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstLetterUppercase } from '../Validators/firstLetterUppercase';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  form: FormGroup;
  genres: { id: number; name: string; }[];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required, Validators.minLength(3), firstLetterUppercase()]
      }],
      genreId :0,
      upcomingReleases : false,
      inTheater: true
    });

    this.genres=[{id: 0, name:'Drama'},{id: 1, name:'Action'},{id: 2, name:'Romance'}];
  }

  saveChanges(){
    // ... save the genre
    const name_field = this.form.get('name');
    alert( name_field.value);  
    //this.router.navigate(['/genres']);

  }

  getErrorMessageFieldName(){
    const field = this.form.get('name');

    if (field.hasError('required')){
      return 'The name field is required';
    }

    if (field.hasError('minlength')){
      return 'The minimum length is 3';
    }

    if (field.hasError('firstLetterUppercase')){
      return field.getError('firstLetterUppercase').message;
    }

    return '';
  }

}

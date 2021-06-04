import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenreCreationDTO } from 'src/app/Models/Genre.model';
import { GenreService } from 'src/app/services/genre.service';
import { firstLetterUppercase } from 'src/app/Validators/firstLetterUppercase';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit {
  form: FormGroup;
  genre: GenreCreationDTO;
  constructor(private router: Router, private service: GenreService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.genre = { name: '' };
    this.form = this.fb.group({
      name: ['', {
        validators: [Validators.required, Validators.minLength(3), firstLetterUppercase()]
      }]
    });
  }

  savechanges(genre: GenreCreationDTO) {
    this.service.creat(genre).subscribe(() => {
      this.router.navigate(['/genres']);
    }, error => { console.error(error) });
  }

  getErrorMessageFieldName() {
    const field = this.form.get('name');

    if (field.hasError('required')) {
      return 'The name field is required';
    }

    if (field.hasError('minlength')) {
      return 'The minimum length is 3';
    }

    if (field.hasError('firstLetterUppercase')) {
      return field.getError('firstLetterUppercase').message;
    }

    return '';
  }

}

import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

/**
 * @title Simple autocomplete
 */
 @Component({
  selector: 'app-inputmaterial',
  templateUrl: './inputmaterial.component.html',
  styleUrls: ['./inputmaterial.component.css']
})
export class InputmaterialComponent {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
}
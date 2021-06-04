import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputmaterialComponent } from './inputmaterial.component';

describe('InputmaterialComponent', () => {
  let component: InputmaterialComponent;
  let fixture: ComponentFixture<InputmaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputmaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

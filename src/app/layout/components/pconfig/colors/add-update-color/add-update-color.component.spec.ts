import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateColorComponent } from './add-update-color.component';

describe('AddUpdateColorComponent', () => {
  let component: AddUpdateColorComponent;
  let fixture: ComponentFixture<AddUpdateColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

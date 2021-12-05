import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateSizeComponent } from './add-update-size.component';

describe('AddUpdateSizeComponent', () => {
  let component: AddUpdateSizeComponent;
  let fixture: ComponentFixture<AddUpdateSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateSizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

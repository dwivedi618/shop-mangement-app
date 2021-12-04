import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateInventoryComponent } from './add-update-inventory.component';

describe('AddUpdateInventoryComponent', () => {
  let component: AddUpdateInventoryComponent;
  let fixture: ComponentFixture<AddUpdateInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

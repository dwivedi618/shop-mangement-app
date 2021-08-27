import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrderCategoryComponent } from './new-order-category.component';

describe('NewOrderCategoryComponent', () => {
  let component: NewOrderCategoryComponent;
  let fixture: ComponentFixture<NewOrderCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOrderCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrderCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

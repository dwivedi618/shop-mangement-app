import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarmentsCategoryComponent } from './garments-category.component';

describe('GarmentsCategoryComponent', () => {
  let component: GarmentsCategoryComponent;
  let fixture: ComponentFixture<GarmentsCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarmentsCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GarmentsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

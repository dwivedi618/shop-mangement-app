import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryItemDetailsComponent } from './inventory-item-details.component';

describe('InventoryItemDetailsComponent', () => {
  let component: InventoryItemDetailsComponent;
  let fixture: ComponentFixture<InventoryItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryItemDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

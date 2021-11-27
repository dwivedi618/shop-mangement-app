import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrderlayoutComponent } from './new-orderlayout.component';

describe('NewOrderlayoutComponent', () => {
  let component: NewOrderlayoutComponent;
  let fixture: ComponentFixture<NewOrderlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOrderlayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrderlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

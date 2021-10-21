import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakePaymentComponent } from './take-payment.component';

describe('TakePaymentComponent', () => {
  let component: TakePaymentComponent;
  let fixture: ComponentFixture<TakePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakePaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

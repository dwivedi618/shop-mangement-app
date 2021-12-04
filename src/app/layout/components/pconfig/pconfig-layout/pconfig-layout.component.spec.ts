import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PconfigLayoutComponent } from './pconfig-layout.component';

describe('PconfigLayoutComponent', () => {
  let component: PconfigLayoutComponent;
  let fixture: ComponentFixture<PconfigLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PconfigLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PconfigLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

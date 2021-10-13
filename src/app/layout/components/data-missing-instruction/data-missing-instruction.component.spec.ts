import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMissingInstructionComponent } from './data-missing-instruction.component';

describe('DataMissingInstructionComponent', () => {
  let component: DataMissingInstructionComponent;
  let fixture: ComponentFixture<DataMissingInstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataMissingInstructionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataMissingInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

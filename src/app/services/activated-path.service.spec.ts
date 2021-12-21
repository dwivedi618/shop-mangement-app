import { TestBed } from '@angular/core/testing';

import { ActivatedPathService } from './activated-path.service';

describe('ActivatedPathService', () => {
  let service: ActivatedPathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivatedPathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

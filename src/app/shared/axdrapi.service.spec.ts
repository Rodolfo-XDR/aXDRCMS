import { TestBed } from '@angular/core/testing';

import { AxdrapiService } from './axdrapi.service';

describe('AxdrapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AxdrapiService = TestBed.get(AxdrapiService);
    expect(service).toBeTruthy();
  });
});

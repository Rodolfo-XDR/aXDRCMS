import { TestBed } from '@angular/core/testing';

import { PreLoaderService } from './pre-loader.service';

describe('PreLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreLoaderService = TestBed.get(PreLoaderService);
    expect(service).toBeTruthy();
  });
});

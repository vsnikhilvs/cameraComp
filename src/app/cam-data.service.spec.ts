import { TestBed } from '@angular/core/testing';

import { CamDataService } from './cam-data.service';

describe('CamDataService', () => {
  let service: CamDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CamDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

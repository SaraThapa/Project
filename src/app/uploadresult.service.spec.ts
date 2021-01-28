import { TestBed } from '@angular/core/testing';

import { UploadresultService } from './uploadresult.service';

describe('UploadresultService', () => {
  let service: UploadresultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadresultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

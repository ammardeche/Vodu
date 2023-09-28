import { TestBed } from '@angular/core/testing';

import { CategServiceService } from './categ-service.service';

describe('CategServiceService', () => {
  let service: CategServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

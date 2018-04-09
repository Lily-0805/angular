import { TestBed, inject } from '@angular/core/testing';

import { AllServiceService } from './all-service.service';

describe('AllServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllServiceService]
    });
  });

  it('should be created', inject([AllServiceService], (service: AllServiceService) => {
    expect(service).toBeTruthy();
  }));
});

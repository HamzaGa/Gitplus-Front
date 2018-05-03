import { TestBed, inject } from '@angular/core/testing';

import { Step3Service } from './step3.service';

describe('Step3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Step3Service]
    });
  });

  it('should be created', inject([Step3Service], (service: Step3Service) => {
    expect(service).toBeTruthy();
  }));
});

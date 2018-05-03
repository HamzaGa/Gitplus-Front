import { TestBed, inject } from '@angular/core/testing';

import { Step2Service } from './step2.service';

describe('Step2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Step2Service]
    });
  });

  it('should be created', inject([Step2Service], (service: Step2Service) => {
    expect(service).toBeTruthy();
  }));
});

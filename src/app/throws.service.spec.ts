import { TestBed, inject } from '@angular/core/testing';

import { ThrowsService } from './throws.service';

describe('ThrowsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThrowsService]
    });
  });

  it('should ...', inject([ThrowsService], (service: ThrowsService) => {
    expect(service).toBeTruthy();
  }));
});

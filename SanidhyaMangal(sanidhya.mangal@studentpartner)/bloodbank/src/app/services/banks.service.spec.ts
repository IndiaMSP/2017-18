import { TestBed, inject } from '@angular/core/testing';

import { BanksService } from './banks.service';

describe('BanksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BanksService]
    });
  });

  it('should be created', inject([BanksService], (service: BanksService) => {
    expect(service).toBeTruthy();
  }));
});

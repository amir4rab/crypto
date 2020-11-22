import { TestBed } from '@angular/core/testing';

import { CoinrankingapiService } from './coinrankingapi.service';

describe('CoinrankingapiService', () => {
  let service: CoinrankingapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoinrankingapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

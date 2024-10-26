import { TestBed } from '@angular/core/testing';

import { MarqueproduitService } from './marqueproduit.service';

describe('MarqueproduitService', () => {
  let service: MarqueproduitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarqueproduitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { StartaService } from './starta.service';

describe('StartaService', () => {
  let service: StartaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StartaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

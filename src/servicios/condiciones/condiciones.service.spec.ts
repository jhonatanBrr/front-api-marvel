import { TestBed } from '@angular/core/testing';

import { CondicionesService } from './condiciones.service';

describe('CondicionesService', () => {
  let service: CondicionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CondicionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

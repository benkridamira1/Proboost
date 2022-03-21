import { TestBed } from '@angular/core/testing';

import { ListOffreService } from './list-offre.service';

describe('ListOffreService', () => {
  let service: ListOffreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListOffreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ServiceWithObservableService } from './service-with-observable.service';

describe('ServiceWithObservableService', () => {
  let service: ServiceWithObservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceWithObservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TimeZoneServiceService } from './time-zone-service.service';

describe('TimeZoneServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimeZoneServiceService = TestBed.get(TimeZoneServiceService);
    expect(service).toBeTruthy();
  });
});

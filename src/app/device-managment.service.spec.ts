import { TestBed } from '@angular/core/testing';

import { DeviceManagmentService } from './device-managment.service';

describe('DeviceManagmentService', () => {
  let service: DeviceManagmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviceManagmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

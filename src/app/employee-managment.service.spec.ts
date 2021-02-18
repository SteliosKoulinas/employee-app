import { TestBed } from '@angular/core/testing';

import { EmployeeManagmentService } from './employee-managment.service';

describe('EmployeeManagmentService', () => {
  let service: EmployeeManagmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeManagmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

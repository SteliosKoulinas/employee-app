import { TestBed } from '@angular/core/testing';

import { AssignManagmentService } from './assign-managment.service';

describe('AssignManagmentService', () => {
  let service: AssignManagmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignManagmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

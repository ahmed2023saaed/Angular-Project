import { TestBed } from '@angular/core/testing';

import { ServeStudentService } from './serve-student.service';

describe('ServeStudentService', () => {
  let service: ServeStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

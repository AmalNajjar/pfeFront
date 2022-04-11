import { TestBed } from '@angular/core/testing';

import { RegistrationAdminService } from './registration-admin.service';

describe('RegistrationAdminService', () => {
  let service: RegistrationAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { tableData } from './tableData.service';

describe('tableData', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: tableData = TestBed.get(tableData);
    expect(service).toBeTruthy();
  });
});

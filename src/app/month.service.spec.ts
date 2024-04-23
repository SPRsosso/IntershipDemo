import { TestBed } from '@angular/core/testing';

import { MonthService } from './month.service';

describe('MonthService', () => {
  let service: MonthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return months', () => {
    expect(service.getMonths().length).toBe(12);
  });

  it('should return month', () => {
    expect(service.getMonth("January")).toBeTruthy();
  });

  it('should return true if months.length is 12', () => {
    service.months$.subscribe(months => {
      expect(months.length).toBe(12);
    });
  })
});

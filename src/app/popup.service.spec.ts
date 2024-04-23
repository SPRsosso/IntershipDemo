import { TestBed } from '@angular/core/testing';

import { PopupService } from './popup.service';

describe('PopupService', () => {
  let service: PopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return false if isOpen is false', () => {
    service.isOpen$.subscribe((args) => {
      expect(args.isOpen).toBeFalsy();
    });
  });

  it('should return true after changePopup is called', () => {
    service.changePopup();
    service.isOpen$.subscribe(args => {
      expect(args.isOpen).toBeTruthy();
    });
  })
});

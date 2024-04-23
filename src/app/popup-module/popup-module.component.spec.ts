import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupModuleComponent } from './popup-module.component';
import { PopupService } from '../popup.service';

describe('PopupModuleComponent', () => {
  let component: PopupModuleComponent;
  let fixture: ComponentFixture<PopupModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupModuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopupModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return clear strings when clearInputs() is called', () => {
    component.clearInputs();
    expect(component.name).toBe('');
    expect(component.description).toBe('');
    expect(component.time).toBe('');
  });

  it('should return false when closePopupClicked() is called', () => {
    component.addTaskClicked();

    const service = TestBed.inject(PopupService);
    component.closePopupClicked();

    expect(component.name).toBe('');
    expect(component.description).toBe('');
    expect(component.time).toBe('');

    service.isOpen$.subscribe(args => {
      expect(args.isOpen).toBe(false);
    });
  });
});

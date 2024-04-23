import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarDayComponent } from './calendar-day.component';
import { PopupService } from '../popup.service';

describe('CalendarDayComponent', () => {
  let component: CalendarDayComponent;
  let fixture: ComponentFixture<CalendarDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarDayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalendarDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display popup on add task click', () => {
    const service = TestBed.inject(PopupService);
    component.addTaskClicked();
    service.isOpen$.subscribe(args => {
      expect(args.isOpen).toBeTruthy();
    });
  });
});

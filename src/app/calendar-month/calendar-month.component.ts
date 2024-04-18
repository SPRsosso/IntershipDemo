import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MonthService } from '../month.service';
import { CalendarDayComponent } from '../calendar-day/calendar-day.component';
import { Month } from '../../data/month';

@Component({
  selector: 'calendar-month',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    CalendarDayComponent
  ],
  templateUrl: './calendar-month.component.html',
  styleUrl: './calendar-month.component.css'
})
export class CalendarMonthComponent {
  @Input() name: string = "";
  month: Month | undefined;
  days: number | undefined;
  daysArray: number[] = [];

  ngOnInit(): void {
    this.month = this.monthService.getMonth(this.name);
    this.days = this.month?.days;
    if (this.days)
      for (let i = 1; i <= this.days; i++)
        this.daysArray.push(i);
  }

  constructor(private monthService: MonthService) {}
}

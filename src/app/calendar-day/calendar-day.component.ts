import { Component, Input } from '@angular/core';
import { PopupService } from '../popup.service';
import { MonthService } from '../month.service';
import { Task } from '../../data/task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'calendar-day',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './calendar-day.component.html',
  styleUrl: './calendar-day.component.css'
})
export class CalendarDayComponent {
  @Input() name: string = "";
  @Input() day: number = 0;

  tasks: Task[] = [];
  
  addTaskClicked(): void {
    this.popupService.changePopup(this.name, this.day);
  }

  ngOnInit(): void {
    
  }

  constructor(private popupService: PopupService, private monthService: MonthService) {
    this.monthService.months$.subscribe((months) => {
      const month = this.monthService.getMonth(this.name);
      this.tasks = [];
      month?.tasks.forEach(task => {
        if (task.day == this.day)
          this.tasks.push(task);
      });
    });
  }
}

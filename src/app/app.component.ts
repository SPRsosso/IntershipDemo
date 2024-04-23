import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarMonthComponent } from './calendar-month/calendar-month.component';
import { MonthService } from './month.service';
import { CommonModule } from '@angular/common';
import { PopupModuleComponent } from './popup-module/popup-module.component';
import { PopupService } from './popup.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    CalendarMonthComponent,
    PopupModuleComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppComponent {
  title = 'Schedule';
  months = this.monthService.getMonths();

  constructor(private monthService: MonthService, private popupService: PopupService) {}
}

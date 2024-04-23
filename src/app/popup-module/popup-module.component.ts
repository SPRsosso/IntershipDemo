import { Component, Input } from '@angular/core';
import { MonthService } from '../month.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PopupService } from '../popup.service';
import { Task } from '../../data/task';

@Component({
  selector: 'popup-module',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './popup-module.component.html',
  styleUrl: './popup-module.component.css'
})
export class PopupModuleComponent {
  isOpen = false;

  @Input() name: string = "";
  @Input() description: string = "";
  @Input() time: string = "";

  monthName: string | undefined = "";
  monthDay: number | undefined = 0;

  constructor(private popupService: PopupService, private monthService: MonthService) {
    this.popupService.isOpen$.subscribe((args) => {
      this.isOpen = args.isOpen;
      this.monthName = args.monthName;
      this.monthDay = args.monthDay;
    });
  }

  clearInputs() {
    this.name = "";
    this.description = "";
    this.time = "";
  }

  closePopupClicked(): void {
    this.clearInputs();
    this.popupService.changePopup();
  }

  addTaskClicked() {
    const month = this.monthService.getMonth(this.monthName as string);
    month?.tasks.push(new Task(this.monthDay as number, this.name, this.description, this.time));
    this.monthService.months$.next(this.monthService.getMonths());

    localStorage.setItem("months", JSON.stringify(this.monthService.getMonths()));
    
    this.clearInputs();
    this.popupService.changePopup();
  }
}

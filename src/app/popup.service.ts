import { Injectable } from '@angular/core';
import { Task } from '../data/task';
import { MonthService } from './month.service';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PopupService {
  
  private isOpen = false;
  private isOpenSubject$ = new BehaviorSubject({ isOpen: this.isOpen, monthName: "", monthDay: 0 } as {isOpen: boolean, monthName: string | undefined, monthDay: number | undefined});
  isOpen$ = this.isOpenSubject$.asObservable();
  
  changePopup(monthName?: string, monthDay?: number): void {
    this.isOpen = !this.isOpen;
    this.isOpenSubject$.next({ isOpen: this.isOpen, monthName, monthDay });
  }

  constructor() {}
}

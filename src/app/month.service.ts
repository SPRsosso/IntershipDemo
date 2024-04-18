import { Injectable } from '@angular/core';
import { Month } from '../data/month';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonthService {
  private months: Month[] = [
    new Month("January", 31),
    new Month("February", 28),
    new Month("March", 31),
    new Month("April", 30),
    new Month("May", 31),
    new Month("June", 30),
    new Month("July", 31),
    new Month("August", 31),
    new Month("September", 30),
    new Month("October", 31),
    new Month("November", 30),
    new Month("December", 31)
  ];
  months$ = new BehaviorSubject(this.months);

  getMonth(name: string): Month | undefined {
    return this.months.find(month => month.name == name);
  }

  getMonths(): Month[] {
    return this.months;
  }

  constructor() { }
}

import { Inject, Injectable, PLATFORM_ID, inject } from '@angular/core';
import { Month } from '../data/month';
import { BehaviorSubject } from 'rxjs';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

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

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
    
  ) {
    if(!isPlatformBrowser(this.platformId)) {
      return;
    }

    const localStorage = document.defaultView?.localStorage;

    if (localStorage !== undefined) {
      const months = localStorage.getItem("months");
      if (months)
        this.months = JSON.parse(months);
    }
  }

  getMonth(name: string): Month | undefined {
    return this.months.find(month => month.name == name);
  }

  getMonths(): Month[] {
    return this.months;
  }
}

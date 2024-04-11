import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { WishlistItem } from '../../shared/models/wishlistItem';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'wish-filter',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent {
  @Input() selectOptions: string[] = [];
  
  @Output() filterChange = new EventEmitter<any>();

  updateFilter(event: any) {
    this.filterChange.emit(+event.target.value);
  }
}

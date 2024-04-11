import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishlistItem } from '../shared/models/wishlistItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';

const filters = [
  (item: WishlistItem) => item,
  (item: WishlistItem) => !item.isComplete,
  (item: WishlistItem) => item.isComplete
]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule, 
    FormsModule,
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppComponent {
  items: WishlistItem[] = [
    new WishlistItem("To learn Angular"),
    new WishlistItem("Get coffee", true),
    new WishlistItem("Find grass that cuts itself")
  ];

  filteredItems = this.items;
  selectFilter: number = 0;
  onFilterChange(selectedFilter: number = this.selectFilter) {
    this.selectFilter = selectedFilter;
    this.filteredItems = this.items.filter(filters[selectedFilter])
  }
}

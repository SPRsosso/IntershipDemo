import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WishlistItem } from '../../shared/models/wishlistItem';

@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {
  @Output() reloadWishes = new EventEmitter<any>();
  @Input() wishes: WishlistItem[] = [];

  toggleItem(item: WishlistItem): void {
    item.isComplete = !item.isComplete;
    this.reloadWishes.emit();
  }
}

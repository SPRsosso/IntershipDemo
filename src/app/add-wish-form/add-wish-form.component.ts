import { Component, Output, EventEmitter, output } from '@angular/core';
import { WishlistItem } from '../../shared/models/wishlistItem';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'add-wish-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css'
})
export class AddWishFormComponent {
  @Output() addWish = new EventEmitter<WishlistItem>();

  newWishText: string = "";
  addNewWish(): void {
    this.addWish.emit(new WishlistItem(this.newWishText));
    this.newWishText = "";
  }
}

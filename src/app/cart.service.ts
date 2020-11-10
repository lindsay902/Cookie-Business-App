import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class CartService {
  items = [];

  hidden = true;

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }
  
  clearCart() {
    this.items = [];
    return this.items;
  }

  itemInCart() {
    let itemCount = this.items.length;
    if (itemCount >= 1) {
      this.hidden = false;
    }
  }


  // toggle() {
  //   this.hidden = !this.hidden;
  // }

  // itemInCartBadge() {
  //   let badgeContent = this.items.length;
  // }

}

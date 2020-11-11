import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class CartService {
  items = [];

  hidden = true;

  addToCart(product) {
    let checkForItem = this.items.find(({name}) => name === product.name); 
      if (!checkForItem) {
        this.items.push(product);
        product.quantity = 1;
      }
  }

  //getSubtotal(price, quantity) {
    //let subtotal = this.items
  //}

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

import { Injectable } from '@angular/core';
import { products } from './products';

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
      console.log(this.hidden);
    }
    return this.hidden;
  }
}

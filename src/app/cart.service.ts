import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class CartService {
  items = [];

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  deleteItem(product) {
    let itemToRemove = this.items.indexOf(product);
    this.items.splice(itemToRemove, 1)
  }

  removeItem(product){
    this.items.forEach( (item, index) => {
      if(item === [product]) this.items.splice(index,1);
    });
 }

  clearCart() {
    this.items = [];
    return this.items;
  }
}

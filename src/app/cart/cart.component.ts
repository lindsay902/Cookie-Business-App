import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  deleteItem(product) {
    let itemToRemove = this.items.indexOf(product);
    this.items.splice(itemToRemove, 1)
  }

  increaseQuantity(product) {
    if (product.quantity < 20) {
      product.quantity ++;
    }
  }

  decreaseQuantity(product) {
    if (product.quantity > 0) {
      product.quantity --;
    }
  }

}

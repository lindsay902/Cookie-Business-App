import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';
import {MatGridListModule} from '@angular/material/grid-list';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products = products;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  addToCart(product) {
    this.cartService.addToCart(product);
    this.cartService.itemInCart();
    //this.cartService.itemInCartBadge();
    //this.cartService.toggleBadgeVisibility();
  }
  
  
  ngOnInit(): void {
  }

}

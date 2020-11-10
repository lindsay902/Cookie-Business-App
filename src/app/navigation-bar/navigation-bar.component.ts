import { Component, OnInit} from '@angular/core';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
})
export class NavigationBarComponent implements OnInit {
  


  hidden = this.cartService.hidden;
  

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

}


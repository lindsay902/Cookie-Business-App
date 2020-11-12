import { Component, OnInit} from '@angular/core';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
})
export class NavigationBarComponent implements OnInit {
  

  

  constructor(
    private route: ActivatedRoute,
    public cartService: CartService
  ) { }

  ngOnInit(): void {
  }

}


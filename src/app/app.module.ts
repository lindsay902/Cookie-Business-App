import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './materialmodule';
import { ProductsComponent } from './products/products.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { ContactService } from './contact.service';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartService } from './cart.service';
import {MatGridListModule} from '@angular/material/grid-list';




@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavigationBarComponent,
    ContactComponent,
    CartComponent,
    CheckoutComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatBadgeModule,
    ReactiveFormsModule,
    MatGridListModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductsComponent},
      {path: 'home', component: AppComponent},
      {path: 'cart', component: CartComponent},
      {path: 'checkout', component: CheckoutComponent}
    ]),
  ],
  providers: [
    ContactService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

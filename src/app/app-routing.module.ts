import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component'



const routes: Routes = [
  { path: 'products', component: ProductsComponent},
  { path: 'home', component: AppComponent},
  { path: 'contact', component: ContactComponent},
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

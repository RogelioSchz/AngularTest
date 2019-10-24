import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { InfoDeliveryComponent } from './info-delivery/info-delivery.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
// const routes: Routes = [];
const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'products/:productId', component: ProductDetailsComponent},
  {path: 'info-delivery', component: InfoDeliveryComponent},
  {path: 'cart', component: CartComponent},
  {path: "shipping", component: ShippingComponent},
  {path: 'heroes', component: HeroesComponent },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

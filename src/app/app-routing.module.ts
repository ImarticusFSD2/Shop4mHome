import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElectronicsComponent } from './electronics/electronics.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { CartComponent } from './cart/cart.component';
import { FashionComponent } from './fashion/fashion.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';

import { FurnitureComponent } from './furniture/furniture.component';

import { GroceriesComponent } from './groceries/groceries.component';


const routes: Routes = [

  {
    path:'',
    component:HomeComponent
  },
  {
    path:'electronics',
    component:ElectronicsComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'fashion',
    component:FashionComponent
  },
  {
    path:'books',
    component:BooksComponent
  },
  {
    path:'wishlist',
    component:WishlistComponent
  },
  {
    path:'myprofile',
    component:CustomerProfileComponent
  },
  {

    path:'furniture',
    component:FurnitureComponent
  },
{
    path:'groceries',
    component:GroceriesComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

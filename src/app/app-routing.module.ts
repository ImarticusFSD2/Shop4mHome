import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElectronicsComponent } from './electronics/electronics.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { CartComponent } from './cart/cart.component';

import { FashionComponent } from './fashion/fashion.component';
import { CosmeticsComponent } from './fashion/cosmetics/cosmetics.component';
import { KidsAccessoriesComponent } from './fashion/kids-accessories/kids-accessories.component';
import { KidsClothingComponent } from './fashion/kids-clothing/kids-clothing.component';
import { KidsFootwearComponent } from './fashion/kids-footwear/kids-footwear.component';
import { WomenClothingComponent } from './fashion/women-clothing/women-clothing.component';
import { WomenAccessoriesComponent } from './fashion/women-accessories/women-accessories.component';
import { WomenFootwearComponent } from './fashion/women-footwear/women-footwear.component';
import { MenClothingComponent } from './fashion/men-clothing/men-clothing.component';
import { MenAccessoriesComponent } from './fashion/men-accessories/men-accessories.component';
import { MenFootwearComponent } from './fashion/men-footwear/men-footwear.component';

import { WishlistComponent } from './wishlist/wishlist.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';

import { FurnitureComponent } from './furniture/furniture.component';

import { GroceriesComponent } from './groceries/groceries.component';
import { SportsComponent } from './sports/sports.component';
import { SamsungComponent } from './electronics/samsung/samsung.component';
import { MiComponent } from './electronics/mi/mi.component';
import { HpComponent } from './electronics/hp/hp.component';
import { DelComponent } from './electronics/del/del.component';
import { FridgeComponent } from './electronics/fridge/fridge.component';
import { WmComponent } from './electronics/wm/wm.component';
import { TvComponent } from './electronics/tv/tv.component';


const routes: Routes = [

  {
    path:'',
    component:HomeComponent
  },
  {
    path:'electronics',
    component:ElectronicsComponent,
    children:[
      {
        path:'samsung',
        component:SamsungComponent
      },
      {
        path:'mi',
        component:MiComponent
      },
      {
        path:'hp',
        component:HpComponent
      },
      {
        path:'del',
        component:DelComponent
      },
      {
        path:'fridge',
        component:FridgeComponent
      },
      {
        path:'tv',
        component:TvComponent
      },
      {
        path:'wm',
        component:WmComponent
      },
    ]
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'fashion',
    component:FashionComponent,
    children:[

      {
        path:'cosmetics',
        component:CosmeticsComponent
      },
      {
        path:'kids-clothing',
        component:KidsClothingComponent
      },
      {
        path:'kids-accessories',
        component:KidsAccessoriesComponent
      },
      {
        path:'kids-footwear',
        component:KidsFootwearComponent
      },
      {
        path:'women-clothing',
        component:WomenClothingComponent
      },
      {
        path:'women-accessories',
        component:WomenAccessoriesComponent
      },
      {
        path:'women-footwear',
        component:WomenFootwearComponent
      },
      {
        path:'men-clothing',
        component:MenClothingComponent
      },
      {
        path:'men-accessories',
        component:MenAccessoriesComponent
      },
      {
        path:'men-footwear',
        component:MenFootwearComponent
      },

    ]
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

  },
  {
    path:'sports',
    component:SportsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

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
import { SportsComponent } from './sports/sports.component';

import { SamsungComponent } from './electronics/samsung/samsung.component';
import { MiComponent } from './electronics/mi/mi.component';
import { HpComponent } from './electronics/hp/hp.component';
import { DelComponent } from './electronics/del/del.component';
import { FridgeComponent } from './electronics/fridge/fridge.component';
import { WmComponent } from './electronics/wm/wm.component';
import { TvComponent } from './electronics/tv/tv.component';
import { BadmintonRacquetsComponent } from './sports/badminton-racquets/badminton-racquets.component';
import { BadmintonShuttlesComponent } from './sports/badminton-shuttles/badminton-shuttles.component';
import { CricketBatComponent } from './sports/cricket-bat/cricket-bat.component';
import { CricketKitsComponent } from './sports/cricket-kits/cricket-kits.component';
import { CyclesComponent } from './sports/cycles/cycles.component';
import { CyclingAccessoriesComponent } from './sports/cycling-accessories/cycling-accessories.component';
const routes: Routes = [

  {
    path:'',
    component:HomeComponent
  },
  // {
  //   path:'samsung',
  //   component:ElectronicsComponent
  // },
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

  },
  {
    path:'sports',
    component:SportsComponent,
    children:[
      {
        path:'badminton-racquets',
        component:BadmintonRacquetsComponent
      },
      {
        path:'badminton-shuttles',
        component:BadmintonShuttlesComponent
      },
      {
        path:'cricket-bat',
        component:CricketBatComponent
      },
      {
        path:'cricket-kits',
        component:CricketKitsComponent
      },
      {
        path:'cycles',
        component:CyclesComponent
      },
      {
        path:'cycling-accessories',
        component:CyclingAccessoriesComponent
      },
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

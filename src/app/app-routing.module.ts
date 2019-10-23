import { NgModule, Component } from '@angular/core';
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
<<<<<<< HEAD
import { SoapComponent } from './groceries/soap/soap.component';
import { ShampoosComponent } from './groceries/shampoos/shampoos.component';
import { SnacksComponent } from './groceries/snacks/snacks.component';
import { PackedfoodComponent } from './groceries/packedfood/packedfood.component';
import { DetergentsComponent } from './groceries/detergents/detergents.component';
import { RepellantsComponent } from './groceries/repellants/repellants.component';
=======
import { SamsungComponent } from './electronics/samsung/samsung.component';
import { MiComponent } from './electronics/mi/mi.component';
import { HpComponent } from './electronics/hp/hp.component';
import { DelComponent } from './electronics/del/del.component';
import { FridgeComponent } from './electronics/fridge/fridge.component';
import { WmComponent } from './electronics/wm/wm.component';
import { TvComponent } from './electronics/tv/tv.component';
>>>>>>> d08cd07d996c6bdb028e61449c192aff9e067c30


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
    component:GroceriesComponent,
    children :[
      {path: 'soap',component : SoapComponent},
      {path: 'Shampoos',component : ShampoosComponent},
      {path: 'Snacks',component : SnacksComponent},
      {path: 'Packedfood',component : PackedfoodComponent},
      {path: 'Detergents',component : DetergentsComponent},
      {path: 'Repellants',component : RepellantsComponent}
    ]
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

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

import { DoubleBedComponent } from './furniture/double-bed/double-bed.component';
import { DiningTableComponent } from './furniture/dining-table/dining-table.component';
import { HomeChairComponent } from './furniture/home-chair/home-chair.component';
import { OfficeChairComponent } from './furniture/office-chair/office-chair.component';
import { SingleBedComponent } from './furniture/single-bed/single-bed.component';
import { StudyTableComponent } from './furniture/study-table/study-table.component';

import { SoapComponent } from './groceries/soap/soap.component';
import { ShampoosComponent } from './groceries/shampoos/shampoos.component';
import { SnacksComponent } from './groceries/snacks/snacks.component';
import { PackedfoodComponent } from './groceries/packedfood/packedfood.component';
import { DetergentsComponent } from './groceries/detergents/detergents.component';
import { RepellantsComponent } from './groceries/repellants/repellants.component';
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
    component:FurnitureComponent,
    children: [
      {path: 'dining-table', component: DiningTableComponent},
      {path: 'double-bed', component: DoubleBedComponent},
      {path: 'home-chair', component: HomeChairComponent},
      {path: 'office-chair', component: OfficeChairComponent},
      {path: 'single-bed', component: SingleBedComponent},
      {path: 'study-table', component: StudyTableComponent},

     
    ]
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

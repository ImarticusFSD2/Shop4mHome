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
import { DoubleBedComponent } from './furniture/double-bed/double-bed.component';
import { DiningTableComponent } from './furniture/dining-table/dining-table.component';
import { HomeChairComponent } from './furniture/home-chair/home-chair.component';
import { OfficeChairComponent } from './furniture/office-chair/office-chair.component';
import { SingleBedComponent } from './furniture/single-bed/single-bed.component';
import { StudyTableComponent } from './furniture/study-table/study-table.component';


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

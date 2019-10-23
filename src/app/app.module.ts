import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { BooksComponent } from './books/books.component';
import { CartComponent } from './cart/cart.component';
import { FashionComponent } from './fashion/fashion.component';
import {HomeComponent} from './home/home.component';
import{WishlistComponent} from './wishlist/wishlist.component';
import{CustomerProfileComponent} from './customer-profile/customer-profile.component';
import { AdminComponent } from './admin/admin.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { SportsComponent } from './sports/sports.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { BadmintonShuttlesComponent } from './sports/badminton-shuttles/badminton-shuttles.component';
import { BadmintonRacquetsComponent } from './sports/badminton-racquets/badminton-racquets.component';
import { CricketBatComponent } from './sports/cricket-bat/cricket-bat.component';
import { CricketKitsComponent } from './sports/cricket-kits/cricket-kits.component';
import { CyclesComponent } from './sports/cycles/cycles.component';
import { CyclingAccessoriesComponent } from './sports/cycling-accessories/cycling-accessories.component';
import { TennisRacquetsComponent } from './sports/tennis-racquets/tennis-racquets.component';
import { TennisKitsComponent } from './sports/tennis-kits/tennis-kits.component';
import { SamsungComponent } from './electronics/samsung/samsung.component';
import { MiComponent } from './electronics/mi/mi.component';
import { HpComponent } from './electronics/hp/hp.component';
import { DelComponent } from './electronics/del/del.component';
import { TvComponent } from './electronics/tv/tv.component';
import { FridgeComponent } from './electronics/fridge/fridge.component';
import { WmComponent } from './electronics/wm/wm.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    ElectronicsComponent,
    BooksComponent,
    CartComponent,
    FashionComponent,
    HomeComponent,
    WishlistComponent,
    CustomerProfileComponent,
    AdminComponent,
    FurnitureComponent,
    SportsComponent,
    GroceriesComponent,

    BadmintonShuttlesComponent,
    BadmintonRacquetsComponent,
    CricketBatComponent,
    CricketKitsComponent,
    CyclesComponent,
    CyclingAccessoriesComponent,
    TennisRacquetsComponent,
    TennisKitsComponent

    SamsungComponent,
    MiComponent,
    HpComponent,
    DelComponent,
    TvComponent,
    FridgeComponent,
    WmComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

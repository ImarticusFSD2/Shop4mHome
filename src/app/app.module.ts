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
import { MenAccessoriesComponent } from './fashion/men-accessories/men-accessories.component';
import { MenFootwearComponent } from './fashion/men-footwear/men-footwear.component';
import { MenClothingComponent } from './fashion/men-clothing/men-clothing.component';
import { WomenClothingComponent } from './fashion/women-clothing/women-clothing.component';
import { WomenAccessoriesComponent } from './fashion/women-accessories/women-accessories.component';
import { WomenFootwearComponent } from './fashion/women-footwear/women-footwear.component';
import { KidsFootwearComponent } from './fashion/kids-footwear/kids-footwear.component';
import { KidsClothingComponent } from './fashion/kids-clothing/kids-clothing.component';
import { KidsAccessoriesComponent } from './fashion/kids-accessories/kids-accessories.component';
import { CosmeticsComponent } from './fashion/cosmetics/cosmetics.component';
import {HomeComponent} from './home/home.component';
import {WishlistComponent} from './wishlist/wishlist.component';
import {CustomerProfileComponent} from './customer-profile/customer-profile.component';
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



import { DiningTableComponent } from './furniture/dining-table/dining-table.component';
import { StudyTableComponent } from './furniture/study-table/study-table.component';
import { SingleBedComponent } from './furniture/single-bed/single-bed.component';
import { DoubleBedComponent } from './furniture/double-bed/double-bed.component';
import { HomeChairComponent } from './furniture/home-chair/home-chair.component';
import { OfficeChairComponent } from './furniture/office-chair/office-chair.component';
import { SoapComponent } from './groceries/soap/soap.component';
import { ShampoosComponent } from './groceries/shampoos/shampoos.component';
import { SnacksComponent } from './groceries/snacks/snacks.component';
import { PackedfoodComponent } from './groceries/packedfood/packedfood.component';
import { DetergentsComponent } from './groceries/detergents/detergents.component';
import { RepellantsComponent } from './groceries/repellants/repellants.component';

import { MiComponent } from './electronics/mi/mi.component';
import { HpComponent } from './electronics/hp/hp.component';
import { DelComponent } from './electronics/del/del.component';
import { TvComponent } from './electronics/tv/tv.component';
import { FridgeComponent } from './electronics/fridge/fridge.component';
import { WmComponent } from './electronics/wm/wm.component';



import { FooterComponent } from './footer/footer.component';
import { OrderComponent } from './order/order.component';
import { ComicComponent } from './books/comic/comic.component';
import { EngineerComponent } from './books/engineer/engineer.component';
import { FancyComponent } from './books/fancy/fancy.component';
import { FantasyComponent } from './books/fantasy/fantasy.component';
import { MythologyComponent } from './books/mythology/mythology.component';
import { PhilosophyComponent } from './books/philosophy/philosophy.component';
import { PoetryComponent } from './books/poetry/poetry.component';
import { ReligionComponent } from './books/religion/religion.component';
import { SchoolComponent } from './books/school/school.component';
import { ScienceComponent } from './books/science/science.component';
import { BooksOrderComponent } from './books/books-order/books-order.component';
import { BooksCartComponent } from './books/books-cart/books-cart.component';

import { GroceriesOrderComponent } from './groceries/groceries-order/groceries-order.component';
import { SoapBuyComponent } from './groceries/soap-buy/soap-buy.component';
import { SportsOrderComponent } from './sports/sports-order/sports-order.component';
import { CricketbatBuyComponent } from './sports/cricketbat-buy/cricketbat-buy.component';
import{FormsModule} from '@angular/forms';
import { FurnitureOrderComponent } from './furniture/furniture-order/furniture-order.component';
import { FashionOrderComponent } from './fashion/fashion-order/fashion-order.component';
import { FurnitureCartComponent } from './furniture/furniture-cart/furniture-cart.component';
import { FashionCartComponent } from './fashion/fashion-cart/fashion-cart.component';
import { ElecOrderComponent } from './electronics/elec-order/elec-order.component';
import { ElecCartComponent } from './electronics/elec-cart/elec-cart.component';
import { SamsungComponent } from './electronics/samsung/samsung.component';
import {HttpClientModule} from '@angular/common/http';




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
    


    DiningTableComponent,
    StudyTableComponent,
    SingleBedComponent,
    DoubleBedComponent,
    HomeChairComponent,
    OfficeChairComponent,
    SoapComponent,
    ShampoosComponent,
    SnacksComponent,
    PackedfoodComponent,
    DetergentsComponent,
    RepellantsComponent,
    
    
    SamsungComponent,
    MiComponent,
    HpComponent,
    DelComponent,
    TvComponent,
    FridgeComponent,




    WmComponent,
    CosmeticsComponent,
    MenClothingComponent,
    MenAccessoriesComponent,
    MenFootwearComponent,
    WomenFootwearComponent,
    WomenAccessoriesComponent,
    WomenClothingComponent,
    KidsClothingComponent,
    KidsAccessoriesComponent,
    KidsFootwearComponent,

    FooterComponent,
    OrderComponent,

    ComicComponent,
    EngineerComponent,
    FancyComponent,
    FantasyComponent,
    MythologyComponent,
    PhilosophyComponent,
    PoetryComponent,
    ReligionComponent,
    SchoolComponent,
    ScienceComponent,
    BooksOrderComponent,
    BooksCartComponent,

    GroceriesOrderComponent,
    SoapBuyComponent,
    SportsOrderComponent,
    CricketbatBuyComponent,

    FurnitureOrderComponent,
    FashionOrderComponent,
    FurnitureCartComponent,
    FashionCartComponent,
    ElecOrderComponent,
    ElecCartComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

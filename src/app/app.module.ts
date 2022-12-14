import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { BurgerListComponent } from './burger-list/burger-list.component';
import { DessertListComponent } from './dessert-list/dessert-list.component';
import { BeveragetListComponent } from './beveraget-list/beveraget-list.component';
import { RouterModule,Routes  } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
const myRouter:Routes=[
  {
    path:"",
    component:MenuComponent
  },
  {
    path:"pizza",
    component:PizzaListComponent
  },{
    path:"burger",
    component:BurgerListComponent
  },{
    path:"dessert",
    component:DessertListComponent,
  },{
    path:"beverage",
    component:BeveragetListComponent,
  }
]
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PizzaListComponent,
    BurgerListComponent,
    DessertListComponent,
    BeveragetListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

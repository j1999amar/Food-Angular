import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { BurgerListComponent } from './burger-list/burger-list.component';
import { DessertListComponent } from './dessert-list/dessert-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PizzaListComponent,
    BurgerListComponent,
    DessertListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

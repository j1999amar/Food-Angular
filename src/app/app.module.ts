import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PizzaListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

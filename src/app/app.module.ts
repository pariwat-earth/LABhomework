import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Lab2Component } from './lab2/lab2.component';
import { ProductListComponent } from './lab2/product-list/product-list.component';
import { ProductItemComponent } from './lab2/product-item/product-item.component';
import { PanelComponent } from './panel/panel.component';
import { HomeworkComponent } from './homework/homework.component';
import { InputComponent } from './homework/input/input.component';
import { InputlistComponent } from './homework/inputlist/inputlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Lab2Component,
    ProductListComponent,
    ProductItemComponent,
    PanelComponent,
    HomeworkComponent,
    InputComponent,
    InputlistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

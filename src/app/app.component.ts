import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from './lab2/product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild('productList', {static: true})
  productList: ProductListComponent;

  ngOnInit(): void {
    this.productList.product = [
      {
        name: 'หมู',
        price: 150
      },
      {
        name: 'ไก่',
        price: 45
      },
      {
        name: 'ปลา',
        price: 70
      }
    ];
  }
  constructor(){}
}

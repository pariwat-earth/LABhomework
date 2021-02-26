import { Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import { Product } from '../product';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @ViewChildren(ProductItemComponent)
  productItem: QueryList<ProductItemComponent>;

  product: Product[];

  constructor() {
    this.product = [];
  }

  // tslint:disable-next-line:typedef
  ngOnInit(){}

  // tslint:disable-next-line:typedef
  selectedProduct(productComponent: ProductItemComponent) {
    alert(`Product ${productComponent.product.name} selected`);
    this.productItem.forEach(p => {
      p.isSelected = false;
 });
    productComponent.isSelected = true;
  }

}

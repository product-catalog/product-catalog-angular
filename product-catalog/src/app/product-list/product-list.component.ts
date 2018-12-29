import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {
  products: Array<any>;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAll().subscribe(
      data => {
        this.products = data;
      },
      error => console.error(error)
    );
  }

}

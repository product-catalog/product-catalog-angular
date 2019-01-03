import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product/product.service';
import { Router } from '@angular/router';
import { Product } from '../dtos';
import { isRegExp } from 'util';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {
  products: Array<any>;
  filteredProducts: Array<any>;
  filterPriceValue: any;
  filterNameValue: string;
  constructor(private productService: ProductService, private _router: Router) { }

  ngOnInit() {
    this.filterPriceValue = 0;
    this.filterNameValue = "";
    this.productService.getAll(localStorage.getItem("token")).subscribe(
      data => {
        this.products = data;
        this.filteredProducts = data;
      },
      error => console.error(error)
    );
  }

  changeNameInput(event){
    this.filterNameValue = event.target.value;
    this.productService.getAll(localStorage.getItem("token")).subscribe(
      data => {
        this.filteredProducts = this.products;
        this.filteredProducts = this.filteredProducts.filter(product => new RegExp(this.filterNameValue).test(product.name)).filter(product => product.price > this.filterPriceValue);
      },
      error => console.error(error)
    );
  }

  changePrice(event){
    this.filterPriceValue = event.target.value;
    this.productService.getAll(localStorage.getItem("token")).subscribe(
      data => {
        this.filteredProducts = this.products;
        document.getElementById("valuePriceFilter").innerText = this.filterPriceValue;
        this.filteredProducts = this.filteredProducts.filter(product => new RegExp(this.filterNameValue).test(product.name));
        this.filteredProducts = this.filteredProducts.filter(product => product.price > this.filterPriceValue);
      },
      error => console.error(error)
    );
  }

}

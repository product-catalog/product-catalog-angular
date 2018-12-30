import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { from } from 'rxjs';
import { ProductService } from '../shared/product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  recordId: number

  constructor(private productService: ProductService,private _router: Router) { }

  ngOnInit() {
    this.recordId = parseInt(this._router.url.split("/")[2]);
    this.productService.getById(this.recordId).subscribe(
      data => {
        this.product = data;
      },
      error => console.error(error)
    );
  }

}

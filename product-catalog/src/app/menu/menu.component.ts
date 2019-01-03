import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product/product.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  logout(){
    localStorage.setItem("token", "");
  }
}

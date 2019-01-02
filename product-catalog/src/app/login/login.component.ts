import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product/product.service';
import { User, Token } from '../dtos';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  token: Subscription;
  product: any;
  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  login(){
    this.user = new User();
    this.user.username = "admin";
    this.user.password = "admin";
    this.productService.getToken(this.user).subscribe(
      data => {
        alert(JSON.stringify(data._body).substring(14, JSON.stringify(data._body).length - 4));
      },
      error => console.error(error)
    );
  }
}

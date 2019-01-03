import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product/product.service';
import { User, Token } from '../dtos';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  token: string;
  product: any;
  username: string;
  password: string;
  constructor(private productService: ProductService,private _router: Router) { }

  ngOnInit() {
  }

  login(){
    $(".alert-danger").show().delay(5000).fadeOut();
    this.user = new User();
    this.user.username = this.username;
    this.user.password = this.password;
    this.productService.getToken(this.user).subscribe(
      data => {
        this.token = JSON.stringify(data._body).substring(14, JSON.stringify(data._body).length - 4);
        this._router.navigateByUrl('/menu');
        localStorage.setItem("token", this.token);
      },
      error => console.error(error)
    );
  
  }

  register(){
    this.user = new User();
    this.user.username = this.username;
    this.user.password = this.password;
    this.productService.register(this.user).subscribe();
    this.productService.getToken(this.user).subscribe(
      data => {
        this.token = JSON.stringify(data._body).substring(14, JSON.stringify(data._body).length - 4);
        this._router.navigateByUrl('/menu');
        localStorage.setItem("token", this.token);
      },
      error => console.error(error)
    );
    this._router.navigateByUrl('/menu');
  }

  onUsernameInput(event) {this.username = event.target.value;}

  onPasswordInput(event) {this.password = event.target.value;}

}

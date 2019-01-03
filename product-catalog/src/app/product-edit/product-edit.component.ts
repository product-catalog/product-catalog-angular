import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ProductService } from '../shared/product/product.service';
import { Router } from '@angular/router';
import { Product, Photo } from '../dtos';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, AfterViewInit {
  recordId: number;
  product: Product;
  productName: string;
  productDescription: string;
  photoName: string;
  photoPhoto: string;

  constructor(private productService: ProductService,private _router: Router) { }

  ngOnInit() {
    this.recordId = parseInt(this._router.url.split("/")[2]);
    this.productService.getById(this.recordId, localStorage.getItem("token")).subscribe(
      data => {
        this.product = data;
        console.log(JSON.stringify(this.product));
      },
      error => console.error(error)
    );
  }

ngAfterViewInit(){
  this.product.price = 10;
}

editProduct(){
  this.product.name = this.productName;
  this.product.description = this.productDescription;
  this.product.photo.name = this.photoName;
  this.product.photo.photo = document.getElementById("resultImage").innerHTML;
  this.productService.editProduct(this.product).subscribe();
}

deleteProduct(){
  this.productService.deleteProduct(this.recordId).subscribe();
}

onNameInput(event) {this.productName = event.target.value;}

onDescriptionInput(event) {this.productDescription = event.target.value;}

onFileSelected(file: HTMLInputElement) {
  this.photoName = file.name; 
  
  this.photoPhoto = this.blobToString(file.files[0]);

  var base64data;
  var reader = new FileReader();
reader.readAsDataURL(file.files[0]); 
  reader.onloadend = function() {
   base64data = reader.result;                
   document.getElementById("resultImage").innerHTML = base64data.substring(23);
}
}

blobToString(b) {
  var u, x;
  u = URL.createObjectURL(b);
  x = new XMLHttpRequest();
  x.open('GET', u, false); // although sync, you're not fetching over internet
  x.send();
  URL.revokeObjectURL(u);
  return x.responseText;
}

}

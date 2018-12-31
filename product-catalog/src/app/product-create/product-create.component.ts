import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from "@angular/core";
import { ProductDto, PhotoDto} from "src/app/dtos";
import { ProductService } from '../shared/product/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit, AfterViewInit {
  product: ProductDto;
  photo: PhotoDto;
  productName: string;
  productDescription: string;
  photoName: string;
  photoPhoto: string;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    this.product = new ProductDto();
    this.photo = new PhotoDto();
    this.product.photo = this.photo;
    this.product.price = 10;
  }

  createNewProduct(){
    this.product.name = this.productName;
    this.product.description = this.productDescription;
    this.photo.name = this.photoName;
    this.photo.photo = document.getElementById("resultImage").innerHTML;
    this.productService.createNewProduct(this.product).subscribe();
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

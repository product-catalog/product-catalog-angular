import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable, from } from 'rxjs'
import { map} from 'rxjs/operators';
import {ProductDto } from 'src/app/ProductDto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: Http) { }

  getAll(): Observable<any> {
    return this.http.get('http://localhost:8080/product/getAll')
    .pipe(map(res => res.json()));
  }
  getById(recordId: number): any {
    return this.http.get('http://localhost:8080/product/getById/?id=' + recordId)
    .pipe(map(res => res.json()));
  }
  createNewProduct(product: ProductDto){
    return this.http.post('http://localhost:8080/product/new', product);
  }
}

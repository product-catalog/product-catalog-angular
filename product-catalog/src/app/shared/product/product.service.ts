import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable, from } from 'rxjs'
import { map} from 'rxjs/operators';
import {ProductDto, Product, User } from 'src/app/dtos';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: Http) { }

  getAll(token: string): Observable<any> {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + token
    })
    return this.http.get('http://localhost:8080/product/getAll', { headers: headers })
    .pipe(map(res => res.json()));
  }
  getById(recordId: number, token: string): any {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + token
    })
    return this.http.get('http://localhost:8080/product/getById/?id=' + recordId, {headers: headers})
    .pipe(map(res => res.json()));
  }
  createNewProduct(product: ProductDto, token: string){
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + token
    })
    return this.http.post('http://localhost:8080/product/new', product, {headers: headers});
  }
  editProduct(product: Product){
    return this.http.put('http://localhost:8080/product/edit', product);
  }
  deleteProduct(recordId: number){
    return this.http.delete('http://localhost:8080/product/delete?id=' + recordId);
  }
  getToken(user: User): any{
    return this.http.post('http://localhost:8080/token/generateToken', user);
  }
  register(user: User): any{
    return this.http.post('http://localhost:8080/signup', user);
  }
}

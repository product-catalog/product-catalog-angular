import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs'
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: Http) { }

  getAll(): Observable<any> {
    // return this.http.get('http://localhost:8080/product/getAll')
    // .map((response: Response) => response.json());
    return this.http.get('http://localhost:8080/product/getAll')
    .pipe(map(res => res.json()));
  }
}

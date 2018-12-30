import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { from } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  recordId: number

  constructor(private _router: Router) { }

  ngOnInit() {
    this.recordId = parseInt(this._router.url.split("/")[2]);
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

import { Routes } from "@angular/router";
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AppComponent } from './app.component';
// [KEY]: Declare the Routes:
const appRoutes: Routes = 
[
  
  { path: '', component: AppComponent },

  { path: 'products', 
    component: ProductListComponent, 
    children:
    [
      { path: ':recordId', component: ProductDetailsComponent },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

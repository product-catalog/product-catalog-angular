import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

import { Routes } from "@angular/router";
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductCreateComponent } from './product-create/product-create.component';
// [KEY]: Declare the Routes:
const appRoutes: Routes = 
[
  
  { path: '', component: MenuComponent },

  { path: 'products', 
    component: ProductListComponent, 
    children:
    [
      { path: ':recordId', component: ProductDetailsComponent },
    ]
  },

  { path: 'create', component: ProductCreateComponent}
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

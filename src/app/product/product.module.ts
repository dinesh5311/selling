import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [AddproductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }

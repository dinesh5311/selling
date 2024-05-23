import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductRoutingModule } from './product-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddproductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule
    
  ]
})
export class ProductModule { }

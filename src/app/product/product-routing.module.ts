import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';

const routes: Routes = [

  { path: 'addproduct', component: AddproductComponent }

  // Add more routes for the user module as needed

];

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})
export class ProductRoutingModule { }

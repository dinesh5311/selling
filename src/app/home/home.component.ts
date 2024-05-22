import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../Service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(private productservice: ProductService) { }

  ngOnInit() {
    this.products = this.productservice.getProducts();
  }

}

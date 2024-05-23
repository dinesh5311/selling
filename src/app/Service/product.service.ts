import { Injectable } from '@angular/core';

export interface Product {
  description: string;
  stock_quantity: number;
  name: string;
  created_at: string;
  price: number;
  product_id: number;
  category_id: number;
  updated_at: string;
  image_url: string; // Added image URL field
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      description: 'Apple iPhone 15',
      stock_quantity: 5,
      name: 'iPhone 15',
      created_at: '2024-05-20T13:40:39',
      price: 120000,
      product_id: 1,
      category_id: 1,
      updated_at: '2024-05-20T13:40:39',
      image_url: 'https://cdn.pixabay.com/photo/2013/07/13/12/46/iphone-160307_1280.png' 
    },
    {
      description: 'Apple iPhone 13',
      stock_quantity: 10,
      name: 'iPhone 13',
      created_at: '2024-05-20T13:40:39',
      price: 60000,
      product_id: 2,
      category_id: 1,
      updated_at: '2024-05-20T13:40:39',
      image_url: 'https://cdn.pixabay.com/photo/2017/10/12/22/17/business-2846221_1280.jpg'
    }
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.product_id === id);
  }
}

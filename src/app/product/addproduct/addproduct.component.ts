import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface Product {
  name: string;
  description: string;
  price: number;
  stock_quantity: number;
  category_id: number;
}


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const newProduct: Product = {
        name: form.value.name,
        description: form.value.description,
        price: form.value.price,
        stock_quantity: form.value.stock_quantity,
        category_id: form.value.category_id
      };

      console.log(newProduct);

    //   this.productService.addProduct(newProduct).subscribe(
    //     response => {
    //       console.log('Product added successfully:', response);
    //       alert('Product added successfully!');
    //       form.reset(); // Reset the form after successful submission
    //     },
    //     error => {
    //       console.error('Error adding product:', error);
    //       alert('There was an error adding the product. Please try again.');
    //     }
    //   );
    // } else {
    //   alert('Please fill out all required fields correctly.');
    // }
  }

}
}

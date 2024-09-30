import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Product {
  id: number,
  name: string,
  price: number,
  discount: boolean,
  discount_value: number,
  date_end_discount: Date | null,
}

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent {
  products: Array<Product> =
    [
      {
        id: 1,
        name: "Téléviseur 4K",
        price: 599.99,
        discount: true,
        discount_value: 25,  // en pourcentage
        date_end_discount: new Date("2024-10-31")
      },
      {
        id: 2,
        name: "Ordinateur Portable",
        price: 899.99,
        discount: false,
        discount_value: 0,
        date_end_discount: null
      },
      {
        id: 3,
        name: "Smartphone",
        price: 499.99,
        discount: true,
        discount_value: 15,  // en pourcentage
        date_end_discount: new Date("2024-12-15")
      },
      {
        id: 4,
        name: "Tablette Tactile",
        price: 299.99,
        discount: false,
        discount_value: 0,
        date_end_discount: null
      },
      {
        id: 5,
        name: "Enceinte Bluetooth",
        price: 79.99,
        discount: true,
        discount_value: 10,  // en pourcentage
        date_end_discount: new Date("2024-11-05")
      },
      {
        id: 6,
        name: "Casque Audio",
        price: 149.99,
        discount: false,
        discount_value: 0,
        date_end_discount: null
      },
      {
        id: 7,
        name: "Montre Connectée",
        price: 199.99,
        discount: true,
        discount_value: 5,  // en pourcentage
        date_end_discount: new Date("2024-10-15")
      }
    ];

  boughtProducts: Array<Product> = [];

  buyProduct(id: number): void {
    const index = this.products.findIndex(product => product.id === id);

    if (index >= 0) {
      const product: Product = this.products[index];
      this.products.splice(index, 1);
      this.boughtProducts.push(product);
    }
  }
}

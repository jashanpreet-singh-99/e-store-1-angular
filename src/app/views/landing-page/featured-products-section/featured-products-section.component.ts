import { Component } from '@angular/core';
import { CarousalComponent } from "../../../components/carousal/carousal.component";
import { ProductItemComponent } from "../../../components/product-item/product-item.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'featured-products-section',
    standalone: true,
    templateUrl: './featured-products-section.component.html',
    styleUrl: './featured-products-section.component.scss',
    imports: [CarousalComponent, ProductItemComponent, CommonModule]
})
export class FeaturedProductsSectionComponent {

  newProductData = [
    {
      'img': '/assets/products-17.jpg',
      'label': 'Kids lotion',
      'price': 199,
      'id': 0
    },
    {
      'img': '/assets/products-18.jpg',
      'label': 'Face cream',
      'price': 129,
      'id': 1
    },
    {
      'img': '/assets/products-19.jpg',
      'label': 'Body cleaner',
      'price': 169,
      'id': 2
    },
    {
      'img': '/assets/products-20.jpg',
      'label': 'Face cleaner',
      'price': 189,
      'id': 3
    },
    {
      'img': '/assets/products-21.jpg',
      'label': 'Night cream',
      'price': 299,
      'id': 4
    },
    {
      'img': '/assets/products-22.jpg',
      'label': 'Face wash',
      'price': 119,
      'id': 5
    },
    {
      'img': '/assets/products-23.jpg',
      'label': 'Light cream',
      'price': 159,
      'id': 6
    },
    {
      'img': '/assets/products-24.jpg',
      'label': 'Milk face wash',
      'price': 139,
      'id': 7
    }
  ];

}

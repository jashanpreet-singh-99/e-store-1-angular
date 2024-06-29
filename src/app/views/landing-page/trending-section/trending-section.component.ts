import { Component } from '@angular/core';
import { ProductItemComponent } from "../../../components/product-item/product-item.component";
import { CommonModule } from '@angular/common';
import { RangePipe } from "../../../utils/range.pipe";

@Component({
    selector: 'trending-section',
    standalone: true,
    templateUrl: './trending-section.component.html',
    styleUrl: './trending-section.component.scss',
    imports: [ProductItemComponent, CommonModule, RangePipe]
})
export class TrendingSectionComponent {

  productData = [
    {
      'img': '/assets/products-29.jpg',
      'label': 'Pink cream',
      'price': 300,
      'id': 0
    },
    {
      'img': '/assets/products-30.jpg',
      'label': 'Body lotion',
      'price': 250,
      'id': 2
    },
    {
      'img': '/assets/products-31.jpg',
      'label': 'Night beauty',
      'price': 400,
      'id': 3
    },
    {
      'img': '/assets/products-32.jpg',
      'label': 'Hand cleaner',
      'price': 100,
      'id': 4
    }
  ];
}

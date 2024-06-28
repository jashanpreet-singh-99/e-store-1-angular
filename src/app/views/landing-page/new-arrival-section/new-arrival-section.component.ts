import { Component } from '@angular/core';
import { ListingItemComponent } from "../../../components/listing-item/listing-item.component";
import { CommonModule } from '@angular/common';
import { RangePipe } from "../../../utils/range.pipe";

@Component({
    selector: 'new-arrival-section',
    standalone: true,
    templateUrl: './new-arrival-section.component.html',
    styleUrl: './new-arrival-section.component.scss',
    imports: [ListingItemComponent, CommonModule, RangePipe]
})
export class NewArrivalSectionComponent {

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

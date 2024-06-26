import { Component, Input } from '@angular/core';
import { PricePipe } from "../../utils/price.pipe";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'listing-item',
    standalone: true,
    templateUrl: './listing-item.component.html',
    styleUrl: './listing-item.component.scss',
    imports: [PricePipe, CommonModule]
})
export class ListingItemComponent {
  @Input() productLabel: string = '';
  @Input() productPrice: number = 0;
  @Input() productImg: string = '/assets/products-21.jpg';
}

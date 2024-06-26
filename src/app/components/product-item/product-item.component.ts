import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PricePipe } from "../../utils/price.pipe";
import { ItemsPipe } from "../../utils/items.pipe";

@Component({
    selector: 'product-item',
    standalone: true,
    templateUrl: './product-item.component.html',
    styleUrl: './product-item.component.scss',
    imports: [NgOptimizedImage, PricePipe, CommonModule, ItemsPipe]
})
export class ProductItemComponent {
  @Input() productLabel: string = 'Product name';
  @Input() productPrice: number = 0;
  @Input() productStock: number = -1;
  @Input() productImg: string = '/assets/products-30.jpg';
  @Input() imgSize: number = 0;
  @Input() showBtn: boolean = false;

}

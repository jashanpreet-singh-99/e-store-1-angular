import { Component } from '@angular/core';
import { ProductItemComponent } from "../../../components/product-item/product-item.component";

@Component({
    selector: 'product-section',
    standalone: true,
    templateUrl: './product-section.component.html',
    styleUrl: './product-section.component.scss',
    imports: [ProductItemComponent]
})
export class ProductSectionComponent {

}

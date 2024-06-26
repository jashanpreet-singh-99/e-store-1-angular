import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
  standalone: true
})
export class PricePipe implements PipeTransform {

  transform(value: number): string {
    if (value === null || value === undefined) return '';

    const formattedValue = value.toFixed(2);
    return `$ ${formattedValue}`;
  }

}

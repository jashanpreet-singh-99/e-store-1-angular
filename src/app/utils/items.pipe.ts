import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'items',
  standalone: true
})
export class ItemsPipe implements PipeTransform {

  transform(count: number): string {
    return (count > 1)? `${count} Items`: `${count} Item`;
  }
}

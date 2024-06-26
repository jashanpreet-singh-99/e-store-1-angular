import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range',
  standalone: true
})
export class RangePipe implements PipeTransform {

  transform(start: number, end: number): number[] {
    return Array(end - start + 1)
            .fill(0)
            .map((_, i) => i + start);
  }

}

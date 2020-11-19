import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceShortener'
})
export class PriceShortenerPipe implements PipeTransform {

  transform(value: string | number, ...args: unknown[]): unknown {
    let nValue: number = parseFloat(value as string);
    let outputString: string;

    if ( nValue > 1000000000000 ) {
      outputString = ( nValue / 1000000000000 ).toFixed(0) + ' t';
    } else if ( nValue > 1000000000 ) {
      outputString = ( nValue / 1000000000 ).toFixed(0) + ' m';
    } else if ( nValue > 1000000 ) {
      outputString = ( nValue / 1000000 ).toFixed(0) + ' m';
    } else if ( nValue > 1000 ) {
      outputString = ( nValue / 1000 ).toFixed(0) + ' k';
    } 

    return outputString;
  }

}

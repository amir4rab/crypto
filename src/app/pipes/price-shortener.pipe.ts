import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceShortener'
})
export class PriceShortenerPipe implements PipeTransform {

  transform(value: string | number, ...args: unknown[]): unknown {
    let nValue: number = parseFloat(value as string);
    let outputString: string;

    if ( nValue > 1000000000000 ) {
      outputString = ( nValue / 1000000000000 ).toFixed(0) + 'T';
    } else if ( nValue > 1000000000 ) {
      outputString = ( nValue / 1000000000 ).toFixed(0) + 'B';
    } else if ( nValue > 1000000 ) {
      outputString = ( nValue / 1000000 ).toFixed(0) + 'M';
    } else if ( nValue > 1000 ) {
      outputString = ( nValue / 1000 ).toFixed(0) + 'K';
    } else {
      outputString = nValue.toFixed(2).toString();
    }

    return outputString;
  }

}

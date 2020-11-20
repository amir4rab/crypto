import { Pipe, PipeTransform } from '@angular/core';
import { StateManagerService } from '../global/state-manager.service';


@Pipe({
  name: 'currencySymbols'
})
export class CurrencySymbolsPipe implements PipeTransform {
  constructor ( private _sM : StateManagerService ) {  }
  transform(value: string, ...args: unknown[]): unknown {
    return value + ' ' + this._sM.currencySymbol;
  }

}

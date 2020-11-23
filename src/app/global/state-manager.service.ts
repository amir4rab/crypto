import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CoinrankingapiRes } from '../types/coinrankingapi.type';
import { currency } from '../types/currency.type';

@Injectable({
  providedIn: 'root'
})
export class StateManagerService {

  //**  Api Settings : start  **//

  private _currency: currency = {
    symbol: '€',
    name: 'EUR'
  };

  historySpan: 'daily' | 'weekly' | 'monthly' = 'daily';

  //**  Api Settings : end  **//

  //*?  currency methods : start  **//

  get currencySymbol ( ) : string {
    return this._currency.symbol;
  };

  get currencyName  ( ) : string {
    return this._currency.name;
  };

  set currency ( currencyName : string ) {
    switch ( currencyName ) {
      case 'EUR': {
        this._currency = {
          symbol: '€',
          name: 'EUR'
        };
        break;
      } 
      case 'USD': {
        this._currency = {
          symbol: '$',
          name: 'USD'
        };
        break;
      } 
      case 'GBP': {
        this._currency = {
          symbol: '£',
          name: 'GBP'
        };
        break;
      } 
    }
  };

  //*?  currency methods : end  **//
  

  //**  Api methods : start  **//

  apiDataLoded: boolean = false;

  apiloading: boolean = false;

  apiLoaded: Subject<CoinrankingapiRes> = new Subject<CoinrankingapiRes>();

  //**  Api methods : end  **//

  constructor() { }
}

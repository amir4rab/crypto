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
    name: 'EUR',
    fName: 'Euro'
  };

  historySpan: 'daily' | 'weekly' | 'monthly' = 'daily';

  //**  Api Settings : end  **//

  //*?  currency methods : start  **//

  get currencySymbol ( ) : string {
    return this._currency.symbol;
  };

  get currencyName ( ) : string {
    return this._currency.name;
  };

  get currencyfName ( ) : string {
    return this._currency.fName;
  };

  set currency ( currencyName : string ) {
    switch ( currencyName ) {
      case 'EUR': {
        this._currency = {
          symbol: '€',
          name: 'EUR',
          fName: 'Euro'
        };
        break;
      } 
      case 'USD': {
        this._currency = {
          symbol: '$',
          name: 'USD',
          fName: 'Us dollar'
        };
        break;
      } 
      case 'GBP': {
        this._currency = {
          symbol: '£',
          name: 'GBP',
          fName: 'Great britain pound'
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


  stateChanged: boolean = true;

  constructor() { }
}

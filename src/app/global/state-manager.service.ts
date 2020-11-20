import { Injectable } from '@angular/core';
import { currency } from '../types/currency.type';

@Injectable({
  providedIn: 'root'
})
export class StateManagerService {

  //**  currency methods : start  **//
  private _currency: currency = {
      symbol: '€',
      name: 'EUR'
  };
  
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

  //**  currency methods : end  **//
  
  constructor() { }
}

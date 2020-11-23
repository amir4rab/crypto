import { Injectable } from '@angular/core';
import { CoinrankingapiService } from '../api-services/coinrankingapi.service';
import { CoinrankingapiRes } from '../types/coinrankingapi.type';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataManagerService {

  //**  cashing methods : start  **//

  private _coinData: {
    daily: CoinrankingapiRes,
    weekly: CoinrankingapiRes,
    monthly: CoinrankingapiRes,
  } = {
    daily: null,
    weekly: null,
    monthly: null
  };

  set dailyCoinData(data: CoinrankingapiRes) {
    this._coinData.daily = data;
  }

  set weeklyCoinData(data: CoinrankingapiRes) {
    this._coinData.weekly = data;
  }

  set monthlyCoinData(data: CoinrankingapiRes) {
    this._coinData.monthly = data;
  }

  get dailyCoinData(): CoinrankingapiRes {
    return this._coinData.daily;
  }

  get weeklyCoinData(): CoinrankingapiRes {
    return this._coinData.weekly;
  }

  get monthlyCoinData(): CoinrankingapiRes {
    return this._coinData.monthly;
  }

  get coinDataObj(): {
    daily: CoinrankingapiRes,
    weekly: CoinrankingapiRes,
    monthly: CoinrankingapiRes,
  } {
    return this._coinData;
  }

   //**  cashing methods : end  **//

  constructor ( ) { }
}

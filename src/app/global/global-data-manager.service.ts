import { Injectable } from '@angular/core';
import { CoinrankingapiService } from '../api-services/coinrankingapi.service';
import { CoinrankingapiRes } from '../types/coinrankingapi.type';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataManagerService {

  //**  cashing methods : start  **//

  coinDataEur: {
    daily: CoinrankingapiRes,
    weekly: CoinrankingapiRes,
    monthly: CoinrankingapiRes,
  } = {
    daily: null,
    weekly: null,
    monthly: null
  };
  
  coinDataUsd: {
    daily: CoinrankingapiRes,
    weekly: CoinrankingapiRes,
    monthly: CoinrankingapiRes,
  } = {
    daily: null,
    weekly: null,
    monthly: null
  };
  
  coinDataGbp: {
    daily: CoinrankingapiRes,
    weekly: CoinrankingapiRes,
    monthly: CoinrankingapiRes,
  } = {
    daily: null,
    weekly: null,
    monthly: null
  };
  
  
   //**  cashing methods : end  **//

  constructor ( ) { }
}

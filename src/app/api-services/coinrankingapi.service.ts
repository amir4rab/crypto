import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StateManagerService } from '../global/state-manager.service';
import { CoinrankingapiRes } from '../types/coinrankingapi.type';
import { GlobalDataManagerService } from '../global/global-data-manager.service';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinrankingapiService {

  base: string;
  timePeriod: string;

  constructor( private httpClient: HttpClient, private stateManager: StateManagerService, private globalDataManager: GlobalDataManagerService ) { 
    this.setSettings();
  }

  getData(): Subject<CoinrankingapiRes> {
    if ( this.stateManager.stateChanged === false ) {
      return new BehaviorSubject<CoinrankingapiRes>(this.globalDataManager[this.getCashPath('curr')][this.getCashPath('time')]);
    } else if ( this.globalDataManager[this.getCashPath('curr')][this.getCashPath('time')] !== null ) {
      return new BehaviorSubject<CoinrankingapiRes>(this.globalDataManager[this.getCashPath('curr')][this.getCashPath('time')]);
    } else {
      console.log('runned!');
      this.stateManager.apiloading = true;
      this.httpClient.get<CoinrankingapiRes>(`https://api.coinranking.com/v1/public/coins?base=${this.base}&timePeriod=${this.timePeriod}`).subscribe(
        res => {
          this.globalDataManager[this.getCashPath('curr')][this.getCashPath('time')] = res;
          this.stateManager.apiLoaded.next(res);
          this.stateManager.apiloading = false;
          this.stateManager.stateChanged = false;
        }, 
        err =>{
          console.error(err);
          
          this.stateManager.apiloading = false;
        }
        );
        return this.stateManager.apiLoaded;
    }
  }

  getSubjectData() {
    return this.httpClient.get<CoinrankingapiRes>('https://api.coinranking.com/v1/public/coins')
  }

  setSettings() {
    this.base = this.stateManager.currencyName;
    switch ( this.stateManager.historySpan ) {
      case 'daily': {
        this.timePeriod =  '24h';
        break;
      }
      case 'weekly': {
        this.timePeriod =  '7d';
        break;
      }
      case 'monthly': {
        this.timePeriod =  '30d';
        break;
      }
    }
  }

  getCashPath(input: 'curr' | 'time'): string {
    let output: string;
    if ( input === 'curr' ) {
      switch(this.stateManager.currencyName) {
        case ( 'USD' ) : {
          output = 'coinDataUsd';
          break;
        }
        case ( 'EUR' ) : {
          output = 'coinDataEur';
          break;
        }
        case ( 'GBP' ) : {
          output = 'coinDataGbp';
          break;
        }
      }
    } else if ( input === 'time' ){
      switch(this.stateManager.historySpan) {
        case ( 'daily' ) : {
          output = 'daily';
          break;
        }
        case ( 'weekly' ) : {
          output = 'weekly';
          break;
        }
        case ( 'monthly' ) : {
          output = 'monthly';
          break;
        }
      }
    }
    return output;
  }
}

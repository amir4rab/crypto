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

  constructor( private httpClient: HttpClient, private stateManager: StateManagerService, private globalDataManager: GlobalDataManagerService ) { }

  getData(): Subject<CoinrankingapiRes> {

    //const subjectRes: BehaviorSubject<CoinrankingapiRes> =  

    if ( this.globalDataManager.coinDataObj[this.stateManager.historySpan] !== null ) {

      return new BehaviorSubject<CoinrankingapiRes>(this.globalDataManager.coinDataObj[this.stateManager.historySpan])

    } else if ( this.stateManager.apiloading === false ) {
      this.stateManager.apiloading = true;
      this.httpClient.get<CoinrankingapiRes>('https://api.coinranking.com/v1/public/coins').subscribe(
        res => {
          switch ( this.stateManager.historySpan ) {
            case 'daily': {
              this.globalDataManager.dailyCoinData = res;
              this.stateManager.apiLoaded.next(res);
              break;
            }
            case 'monthly': {
              this.globalDataManager.monthlyCoinData = res;
              this.stateManager.apiLoaded.next(res);
              break;
            }
            case 'weekly': {
              this.globalDataManager.weeklyCoinData = res;
              this.stateManager.apiLoaded.next(res);
              break;
            }
            
          }
          this.stateManager.apiloading = false;
        }, 
        err =>{
          console.error(err);
          
          this.stateManager.apiloading = false;
        }
        );
        return this.stateManager.apiLoaded;
    } else {
      return this.stateManager.apiLoaded;
    }
  }

  getSubjectData() {
    return this.httpClient.get<CoinrankingapiRes>('https://api.coinranking.com/v1/public/coins')
  }
}

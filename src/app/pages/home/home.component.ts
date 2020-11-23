import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { CoinrankingapiService } from 'src/app/api-services/coinrankingapi.service';
import { coinData } from 'src/app/types/CoinData.type';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  coinsArr: coinData[] = [];
  topCoinsDataArr: coinData[] = [];
  sortedCoinsArr: coinData[] = [];
  topGainersCoinsArr: coinData[] = [];
  topLosersCoinsArr: coinData[] = [];

  pageLoaded: boolean = false;

  constructor( private coinrankingapi: CoinrankingapiService ) {  }
  
  ngOnInit(): void {
    this.coinrankingapi.getData().subscribe( res => {
      this.coinsArr = res.data.coins;
      this.initCharts();
    });
  }

  initCharts(): void {
    this.topCoinsDataArr =  this.coinsArr.slice(0, 10) as coinData[];
    this.sortedCoinsArr = (environment.allCoinData.sort(function(a, b){
      if ( a.change > b.change ) {
        return -1;
      } else if ( a.change < b.change ) {
        return 1;
      }
      return 0;
    }) as coinData[]);
  
    this.topGainersCoinsArr = this.sortedCoinsArr.slice(0, 10);
    this.topLosersCoinsArr = this.sortedCoinsArr.slice(this.sortedCoinsArr.length - 10, this.sortedCoinsArr.length);
    this.pageLoaded = true;
  }
}

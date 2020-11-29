import { AfterContentInit, Component, OnInit } from '@angular/core';
import { CoinrankingapiService } from 'src/app/api-services/coinrankingapi.service';
import { coinData } from 'src/app/types/CoinData.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterContentInit {
  coinsArr: coinData[] = [];
  topCoinsDataArr: coinData[] = [];
  sortedCoinsArr: coinData[] = [];
  topGainersCoinsArr: coinData[] = [];
  topLosersCoinsArr: coinData[] = [];

  loading: boolean = true;

  timeSpent: Date;

  constructor( private coinrankingapi: CoinrankingapiService ) { 
    this.timeSpent = new Date();
  }
  
  ngOnInit(): void { }

  ngAfterContentInit(): void { 
    this.coinrankingapi.getData().subscribe( res => {
      this.coinsArr = res.data.coins;
      this.initCharts();
      this.loading = false;
    });
  }

  initCharts(): void {
    this.topCoinsDataArr =  this.coinsArr.slice(0, 10) as coinData[];
    const tempArr: coinData[] = []; 
    tempArr.push(...this.coinsArr);
    this.sortedCoinsArr = (tempArr.sort(function(a, b){
      if ( a.change > b.change ) {
        return -1;
      } else if ( a.change < b.change ) {
        return 1;
      }
      return 0;
    }) as coinData[]);
  
    this.topGainersCoinsArr = this.sortedCoinsArr.slice(0, 10);
    this.topLosersCoinsArr = (this.sortedCoinsArr.slice(this.sortedCoinsArr.length - 10, this.sortedCoinsArr.length)).reverse();;
    // this.topLosersCoinsArr = this.sortedCoinsArr.slice(this.sortedCoinsArr.length - 10, this.sortedCoinsArr.length);
  }
}

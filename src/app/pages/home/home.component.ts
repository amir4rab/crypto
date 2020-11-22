import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { coinData } from 'src/app/types/CoinData.type';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, AfterContentInit {
  topCoinsDataArr: coinData[] = [];
  sortedCoinsArr: coinData[] = [];
  topGainersCoinsArr: coinData[] = [];
  topLosersCoinsArr: coinData[] = [];

  pageLoaded: boolean = false;

  constructor() {  }
  
  ngOnInit(): void {
    this.topCoinsDataArr = environment.allCoinData.slice(0, 10) as coinData[];
  }

  ngAfterViewInit(): void {
  }
  
  ngAfterContentInit(): void {
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

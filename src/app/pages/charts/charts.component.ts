import { AfterViewInit, Component, OnInit } from '@angular/core';
import { coinData } from 'src/app/types/CoinData.type';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit, AfterViewInit {
  coinDataArrRef: coinData[] = environment.allCoinData as coinData[];
  coinDataArrB1: coinData[] = this.coinDataArrRef.slice(0 , 10);
  coinDataArrB2: coinData[];
  coinDataArrB3: coinData[];
  coinDataArrB4: coinData[];
  coinDataArrB5: coinData[];
  constructor() { 

  }

  ngOnInit(): void {
    
  }
  
  ngAfterViewInit(): void {
    this.splitChartWorkLoad();
  }

  splitChartWorkLoad(): void {
    for( let i = 1 ; i < (this.coinDataArrRef.length / 10) ; i++ ) {
      setTimeout(()=>{
        switch( i ){
          case 1 : {
            this.coinDataArrB2 = this.coinDataArrRef.slice((10 * i) , ((10 * i) + 10));
            break;
          }
          case 2 : {
            this.coinDataArrB3 = this.coinDataArrRef.slice((10 * i) , ((10 * i) + 10));
            break;
          }
          case 3 : {
            this.coinDataArrB4 = this.coinDataArrRef.slice((10 * i) , ((10 * i) + 10));
            break;
          }
          case 4 : {
            this.coinDataArrB5 = this.coinDataArrRef.slice((10 * i) , ((10 * i) + 10));
            break;
          }
        }
      }, 300 * i);
    }
  }

}

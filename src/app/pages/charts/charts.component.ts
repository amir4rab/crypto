import { AfterContentInit, Component, OnInit } from '@angular/core';
import { CoinrankingapiService } from 'src/app/api-services/coinrankingapi.service';
import { coinData } from 'src/app/types/CoinData.type';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit, AfterContentInit {
  coinDataArrRef: coinData[] = [];

  loading: boolean = true;

  overlay = false;
  overlayCoin: coinData;


  constructor( private coinrankingapi: CoinrankingapiService ) {  }

  ngOnInit(): void {
  }
  
  ngAfterContentInit(): void {
    this.coinrankingapi.getData().subscribe(res => {
      this.chartsInit( res.data.coins , 5, 500);
      this.loading = false;
    });
  }

  chartsInit( chartArr: coinData[] , parts: number, timeOut: number ): void {
    //** Spliting charts in couple of parts to save load time of the page **//
    if( chartArr.length % parts !== 0 ){
      parts = 5;
      console.warn(`dividing ${chartArr.length}(array lenth) by ${parts} have remainder!`);
    }

    const partlength: number =  chartArr.length / parts;

    this.coinDataArrRef.push(...chartArr.slice(0 , partlength));

    for( let i = 1 ; i < parts ; i++ ){
      //** Spliting Array in the given parts and push em with the specific time outs **//
      setTimeout(()=>{
        this.coinDataArrRef.push(...chartArr.slice(( partlength * i ) , ( partlength * (i + 1))));
      }, i * timeOut );
    }
  }

  overlayManager( state: boolean, coinData: coinData ): void{
    if ( state === false ) {
      this.overlay = false;
      this.overlayCoin = null;
    } else {
      this.overlayCoin = coinData;
      this.overlay = true;
    }
  }
}

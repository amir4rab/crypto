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

  constructor( private coinrankingapi: CoinrankingapiService ) {  }

  ngOnInit(): void {
  }
  
  ngAfterContentInit(): void {
    this.coinrankingapi.getData().subscribe(res => {
      this.chartsInit( res.data.coins , 5, 1000);
      this.loading = false;
    });
  }

  chartsInit( chartArr: coinData[] , parts: number, timeOut: number ): void {
    const partlength: number =  chartArr.length / parts;

    this.coinDataArrRef.push(...chartArr.slice(0 , partlength));

    for( let i = 1 ; i < parts ; i++ ){
      setTimeout(()=>{
        this.coinDataArrRef.push(...chartArr.slice(( partlength * i ) , ( partlength * (i + 1))));
        console.log(partlength);
      }, i * timeOut );
    }
  }
}

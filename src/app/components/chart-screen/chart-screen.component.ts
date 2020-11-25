import { Component, Input, OnInit } from '@angular/core';
import { coinData } from 'src/app/types/CoinData.type';

@Component({
  selector: 'app-chart-screen',
  templateUrl: './chart-screen.component.html',
  styleUrls: ['./chart-screen.component.scss']
})
export class ChartScreenComponent implements OnInit {
  @Input() coinData: coinData;

  constructor() { }

  ngOnInit(): void {
  }

  getImgUrl( input: string ): string{
    let outPut: string = 'website';

    switch( input ) {
      case 'reddit':{
        outPut = 'reddit';
        break;
      }
      case 'github':{
        outPut = 'github';
        break;
      }
      case 'website':{
        outPut = 'website';
        break;
      }
      case 'reddit':{
        outPut = 'reddit';
        break;
      }
      case 'explorer':{
        outPut = 'website';
        break;
      }
      default: {
        break
      }
    }

    return `../../../assets/icons/${outPut}.svg`
  }
}

import { Component, OnInit } from '@angular/core';
import { coinData } from 'src/app/types/CoinData.type';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  coinDataArr: coinData[] = environment.allCoinData as coinData[];
  constructor() { 

  }

  ngOnInit(): void {
  }

}

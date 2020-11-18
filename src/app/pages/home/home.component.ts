import { Component, OnInit } from '@angular/core';
import { coinData } from 'src/app/types/CoinData.type';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  topCoinData: coinData[];


  constructor() {
    this.topCoinData = environment.allCoinData.slice(0, 10) as coinData[];
    // console.log(environment.allCoinData.slice(0, 10) as coinData[]);
  }

  ngOnInit(): void {
  }

}

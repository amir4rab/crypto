import { Component, Input, OnInit } from '@angular/core';
import { coinData } from 'src/app/types/CoinData.type';

@Component({
  selector: 'app-chart-row',
  templateUrl: './chart-row.component.html',
  styleUrls: ['./chart-row.component.scss']
})
export class ChartRowComponent implements OnInit {
  @Input() coinData: coinData;

  chartID: string;
  constructor() { }

  ngOnInit(): void {
    this.chartID = (Math.random() * 100000).toFixed(0);
  }

}

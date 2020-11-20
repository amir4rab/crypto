import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { coinData } from 'src/app/types/CoinData.type';
import { ChartGenService } from '../../utilities-services/chart-gen.service';

@Component({
  selector: 'app-chart-row',
  templateUrl: './chart-row.component.html',
  styleUrls: ['./chart-row.component.scss']
})
export class ChartRowComponent implements OnInit, AfterViewInit {
  @Input() coinData: coinData;

  chartID: string;
  constructor( private chartGen: ChartGenService ) { }

  ngOnInit(): void {
    this.chartID = (Math.random() * 100000).toFixed(0);
  }
  
  ngAfterViewInit(): void {
    this.chartGen.initChart(this.chartID, this.chartGen.strArrToNumArr(this.coinData.history), this.coinData.change);
  }
}

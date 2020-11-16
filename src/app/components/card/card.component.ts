import { Chart } from 'Chart.js';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Input } from '@angular/core';
import { coinData } from 'src/app/types/CoinData.type';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, AfterViewInit {
  @Input() coinData: coinData;
  dataArr: number[];
  chartId = (Math.random() * 100000).toFixed(0);
  constructor(  ) { 
    
    console.log(this.chartId);
  }

  ngOnInit(): void {
    this.dataArr = this.strArrToNumArr(this.coinData.history);
  }

  ngAfterViewInit(): void {
    try {
      this.makeChart();
    } catch {
      console.warn('el not found!!!')
    }
  }

  makeChart(): void{
    const canvas = (document.getElementById(this.chartId) as HTMLCanvasElement).getContext('2d');

    const bgColor = 'rgba(63, 63, 63, 0)';
    const color = 'rgba(47, 244, 102, 1)';

    const myChart = new Chart(canvas, {
      type: 'line',
      data: {
        labels: this.dataArr,
        datasets: [{
          data: this.dataArr,
          borderColor: [
            color
          ],
          backgroundColor:[
            bgColor
          ],
          pointStyle: 'line',
          pointRadius: 0,
          borderWidth: 2.5,
          borderCapStyle: 'round',
        }]
      },
      options: environment.chartsOption
    });
  }

  strArrToNumArr( inputArr: string[] ): number[]{
    const outputArr: number[] = [];

    inputArr.forEach(str => outputArr.push(parseInt(str)));

    return outputArr;
  }
}

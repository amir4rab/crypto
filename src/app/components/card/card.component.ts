import { Chart } from 'Chart.js';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(  ) { }

  ngOnInit(): void { 
    this.makeChart();
  }

  makeChart(): void{
    const canvas = (document.getElementById('btcCanvas') as HTMLCanvasElement).getContext('2d');

    const rgbaBgColor = 'rgba(63, 63, 63, 0)';
    const rgbaColor = 'rgba(47, 244, 102, 1)';
    const dataArr: number[] = [
      15348.191231599,
      15446.6300066755,
      15567.0743339388,
      15484.058229308,
      15378.0037113131,
      15354.603654194,
      15322.8169880141,
      15478.3381936886,
      15472.7197781632,
      15545.9708002348,
      15511.7680989959,
      15498.3894633605,
      15437.5401567316,
      15390.2600613415,
      15439.7005471411,
      15409.0349090621,
      15384.8589856469,
      15298.3689155139,
      15423.1713527891,
      15448.9392916731,
      15505.8539901769,
      15632.1108884373,
      15404.7822698933,
      15298.4873130554,
      15140.775243554,
      14974.2673279431,
      15021.5036275302
    ];

    const myChart = new Chart(canvas, {
      type: 'line',
      data: {
        labels: dataArr,
        datasets: [{
          data: dataArr,
          borderColor: [
            rgbaColor
          ],
          backgroundColor:[
            rgbaBgColor
          ],
          pointStyle: 'line',
          pointRadius: 0,
          borderWidth: 5,
          borderCapStyle: 'round',
        }]
      },
      options: environment.chartsOption
    });
  }

}

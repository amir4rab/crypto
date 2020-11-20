import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as Chart from 'Chart.js';

@Injectable({
  providedIn: 'root'
})
export class ChartGenService {

  constructor() { }

  initChart( chartId: string, coinPricesArr: number[] , priceChanges: number ): void{
    const canvas = (document.getElementById(chartId) as HTMLCanvasElement).getContext('2d');

    const bgColor = 'rgba(0, 0, 0, 0)';
    const color =  priceChanges > 0 ? 'rgba(47, 244, 102, 1)' : 'rgba(237, 28, 36, 1)';

    const myChart = new Chart(canvas, {
      type: 'line',
      data: {
        labels: coinPricesArr,
        datasets: [{
          data: coinPricesArr,
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
      options: {
        responsive: true,
        maintainAspectRatio: true,
        animation: {
          duration: 0
        },
        hover: {
          animationDuration: 0
        },
        responsiveAnimationDuration: 0,
        elements: {
          line: {
            tension: 0
          }
        },
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
        tooltips: {
          enabled: false
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }],
        },
        layout: { 
          padding: {
            top: 0,
            left: 10,
            right: 10,
            bottom: 0
          }
        }
      }
    });
  }

  strArrToNumArr( inputArr: string[] ): number[]{
    const outputArr: number[] = [];

    inputArr.forEach(str => outputArr.push(parseInt(str)));

    return outputArr;
  }
}

import { AfterViewInit, Component, ContentChild, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Input } from '@angular/core';
import { coinData } from 'src/app/types/CoinData.type';
import { ChartGenService } from 'src/app/utilities-services/chart-gen.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, AfterViewInit {
  @Input() coinData: coinData;
  @ViewChild('canvasEl') canvasEl : ElementRef;
  
  constructor( private chartGen: ChartGenService ){ }

  ngOnInit(): void {  }

  ngAfterViewInit(): void {
    this.chartGen.initChart( this.canvasEl.nativeElement, this.chartGen.strArrToNumArr(this.coinData.history) , this.coinData.change );
  }
}

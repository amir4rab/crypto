import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { coinData } from 'src/app/types/CoinData.type';
import { ChartGenService } from '../../utilities-services/chart-gen.service';

@Component({
  selector: 'app-chart-row',
  templateUrl: './chart-row.component.html',
  styleUrls: ['./chart-row.component.scss']
})
export class ChartRowComponent implements OnInit, AfterViewInit {
  @Input() coinData: coinData;
  @Output() activeOverlay = new EventEmitter<coinData>();

  @ViewChild('canvasEl') canvasEl : ElementRef;
  
  constructor( private chartGen: ChartGenService ) { }

  ngOnInit(): void {   }
  
  ngAfterViewInit(): void {
    this.chartGen.initChart( this.canvasEl.nativeElement , this.chartGen.strArrToNumArr(this.coinData.history) , this.coinData.change );
  }

  titleClicked(): void{
    this.activeOverlay.emit(this.coinData);
  }
}

import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { coinData } from 'src/app/types/CoinData.type';
import { ChartGenService } from 'src/app/utilities-services/chart-gen.service';

@Component({
  selector: 'app-chart-screen',
  templateUrl: './chart-screen.component.html',
  styleUrls: ['./chart-screen.component.scss']
})
export class ChartScreenComponent implements OnInit {
  @Input() coinData: coinData;
  @Output() closeOverley = new EventEmitter<null>();

  @ViewChild('canvasEl') canvasEl : ElementRef;
  
  constructor( private chartGen: ChartGenService ) { }

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
      case 'facebook':{
        outPut = 'facebook';
        break;
      }
      case 'twitter':{
        outPut = 'twitter';
        break;
      }
      default: {
        break
      }
    }

    return `../../../assets/icons/${outPut}.svg`
  }

  closeOverleyFn(): void {
    this.closeOverley.emit();
  }

  ngAfterViewInit(): void {
    this.chartGen.initChart( this.canvasEl.nativeElement, this.chartGen.strArrToNumArr(this.coinData.history) , this.coinData.change );
  }
}

import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { coinData } from '../../types/CoinData.type';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterViewInit {
  @Input() coinDataArr: coinData[];
  @Input() settings: {
    title: string,
    subTitle: string,
  } = {
    title: "",
    subTitle: "See all",
  };

  sliderId: string;
  el: HTMLElement;
  keyDown: Boolean = false;
  startX: number;

  constructor() { 
    this.sliderId = "slider" + (Math.random() * 100000).toFixed(0);
  }

  ngOnInit(): void {  }

  ngAfterViewInit(): void {
    this.el = document.getElementById(this.sliderId) as HTMLElement;
  }

  dragFn(event: MouseEvent, mState: boolean, setX: boolean = false): void {
    this.keyDown = mState;
    if ( setX ) this.startX = event.pageX + this.el.scrollLeft;
  }

  MoveFn(event: MouseEvent): void {
    event.preventDefault();
    if( this.keyDown ) this.el.scrollLeft = (-(event.pageX - this.startX));
  }
}

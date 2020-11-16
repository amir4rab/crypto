import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterViewInit {

  sliderId: string = "slider" + (Math.random() * 10000).toFixed(0);

  el:HTMLElement;
  keyDown: Boolean = false;
  startX: number;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.sliderId);
  }

  ngAfterViewInit(): void{
    this.el = document.getElementById(this.sliderId) as HTMLElement;
  }

  dragFn(event: MouseEvent, mState: boolean, setX: boolean = false): void {
    this.keyDown = mState;
    if ( setX ) this.startX = event.pageX + this.el.scrollLeft;
  }

  MoveFn(event: MouseEvent): void {
    if( this.keyDown ) this.el.scrollLeft = -(event.pageX - this.startX);
  }
}

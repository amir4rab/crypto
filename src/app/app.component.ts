import { Component } from '@angular/core';
import { CoinrankingapiService } from './api-services/coinrankingapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crypto';
  constructor( private coinrankingapi: CoinrankingapiService ) { 
    // this.coinrankingapi.getData();
  }
}

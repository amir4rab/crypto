import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoinrankingapiService {

  constructor( private httpClient: HttpClient ) { }

  getData(): void {
    this.httpClient.get('https://api.coinranking.com/v1/public/coins').subscribe(res=> console.log(res), err=> console.log(err));
  }
}

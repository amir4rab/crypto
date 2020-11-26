import { Component, OnInit } from '@angular/core';
import { StateManagerService } from 'src/app/global/state-manager.service';
import { currency } from 'src/app/types/currency.type';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  activeCurr: string;
  currArr: currency[] = [
    {
      symbol: '$',
      name: 'USD',
      fName: 'Us dollar'
    }, {
        symbol: '€',
        name: 'EUR',
        fName: 'Euro'
    }, {
        symbol: '£',
        name: 'GBP',
        fName: 'Great britain pound'
    }
  ];
  activeTimeS: string;
  timeSArr: string[] = [
    'daily' , 'weekly' , 'monthly'
  ];

  constructor( private stateManager :StateManagerService ) { }

  ngOnInit(): void {
    this.activeCurr = this.stateManager.currencyName;
    this.activeTimeS = this.stateManager.historySpan;
    console.log(this.activeCurr, this.activeTimeS);
  }

  selectCurrency(event: Event): void {
    this.stateManager.currency = (event.target as HTMLSelectElement).value.toUpperCase();
    this.stateManager.stateChanged = true;
  }
  selectTimeSpan(event: Event): void {
    this.stateManager.historySpan = (event.target as HTMLSelectElement).value as 'daily' | 'weekly' | 'monthly';
    this.stateManager.stateChanged = true;
  }
}

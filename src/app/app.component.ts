import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gold: number;

  constructor(private _dataService: DataService) { }

  farm() {
    this._dataService.farmGold();
    this.gold = this._dataService.retrieveGold();
  }

  cave() {
    this._dataService.caveGold();
    this.gold = this._dataService.retrieveGold();
  }

  house() {
    this._dataService.houseGold();
    this.gold = this._dataService.retrieveGold();
  }

  casino() {
    this._dataService.casinoGold();
    this.gold = this._dataService.retrieveGold();
  }
}

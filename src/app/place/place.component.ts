import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})

export class PlaceComponent implements OnInit {
  gold: number;
  
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.gold = this._dataService.retrieveGold();
  }

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

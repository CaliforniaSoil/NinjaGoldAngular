import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  gold: number = 0;
  sum: number = 0;
  places: Array<string> = ['farm', 'cave', 'house', 'casino']; 
  place: string = '';
  constructor() { }

  retrieveGold() {
    return this.gold;
  }

  farmGold() {
    this.gold = Math.floor(Math.random() * 4) + 2;
    console.log(this.gold);
    this.sum += this.gold;
    this.place = this.places[0];
    return this.sum;
  }

  caveGold() {
    this.gold = Math.floor(Math.random() * 6) + 5;
    console.log(this.gold);
    this.sum += this.gold;
    this.place = this.places[1];
    return this.sum;
  }

  houseGold() {
    this.gold = Math.floor(Math.random() * 9) + 7;
    console.log(this.gold);
    this.sum += this.gold;
    this.place = this.places[2];
    return this.sum;
  }

  casinoGold() {
    var max = 101;
    var min = -100;
    this.gold = Math.floor(Math.random() * (max - min) + min);
    console.log(this.gold);
    this.sum += this.gold;
    this.place = this.places[3];
    return this.sum;
  }

}

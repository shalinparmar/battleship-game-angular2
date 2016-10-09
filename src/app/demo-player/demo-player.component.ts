import { Component, OnInit } from '@angular/core';
import { Ship } from "../shared/ship";

@Component({
  selector: 'app-demo-player',
  template: `
    <app-demo-board [ships]="ships"></app-demo-board>
  `,
  styles: []
})
export class DemoPlayerComponent implements OnInit {

  ships: Array<Ship> = new Array<Ship>();

  constructor() {
  }


  ngOnInit(): void {
    this.ships.push(new Ship([11, 12, 13]));
    this.ships.push(new Ship([24, 34, 44, 54]));
    this.ships.push(new Ship([72, 73, 74, 75, 76]));
    this.ships.push(new Ship([28, 38, 48]));
    this.ships.push(new Ship([51, 52]));
  }

}

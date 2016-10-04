import { Component, OnInit } from '@angular/core';
import { Ship } from "../shared/ship";

@Component({
  selector: 'app-demo-player',
  template: `
    <app-board [ships]="ships"></app-board>
  `,
  styles: []
})
export class DemoPlayerComponent implements OnInit {

  ships: Array<Ship> = new Array<Ship>();

  constructor() {
  }


  ngOnInit() {
    this.ships.push(new Ship([11, 12, 13]));
    this.ships.push(new Ship([24, 34, 44, 54]));
  }

}

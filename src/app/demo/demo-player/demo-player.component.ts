import { Component, OnInit } from '@angular/core';
import { Ship } from "../../shared/ship";
import { ShipToLocate } from "../../shared/ship-to-locate";

@Component({
  selector: 'app-demo-player',
  templateUrl: './demo-player.component.html',
  styleUrls: ['./demo-player.component.css']
})
export class DemoPlayerComponent implements OnInit {


  cellsOfShips: Array<number> = new Array<number>();

  constructor() { }

  ngOnInit(): void {
    this.initDemoShips();
  }

  initDemoShips() {

    let shipToAdd: ShipToLocate;

    shipToAdd = new ShipToLocate(false, 4, 11);
    this.addShipToList(shipToAdd);

    shipToAdd = new ShipToLocate(true, 4, 24);
    this.addShipToList(shipToAdd);

    shipToAdd = new ShipToLocate(false, 5, 63);
    this.addShipToList(shipToAdd);
  }

  addShipToList(shipToLocate: ShipToLocate) {
    let shipToAdd: Ship = new Ship(shipToLocate.locations);

    // this.ships = [...this.ships, shipToAdd];


    shipToLocate.locations.forEach((id)=>this.cellsOfShips.push(id));
  }
}

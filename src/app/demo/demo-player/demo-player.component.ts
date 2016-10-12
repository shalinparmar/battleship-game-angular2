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

  message: string = '';
  // currentShip: Ship = new Ship(new Array<number>());

  shipsLengthList: Array<number> = new Array<number>();
  ships: Array<Ship> = new Array<Ship>();


  constructor() { }

  ngOnInit(): void {
    // this.setPlayerByRouteParams();

    // this.setPlayerInfo();

    this.initDemoShips();

    this.getNextShip();
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

    // console.log(this.ships);
    this.ships = [...this.ships, shipToAdd];
    // console.log(this.ships);

    this.message = "add new ship !!! length : " + shipToLocate.locations.length;

    shipToLocate.locations.forEach((id)=>this.cellsOfShips.push(id));
  }

  getNextShip(): void {
    // let numberOfCells: number = this.shipsLengthList.shift();
    //
    // if (numberOfCells) {
    //   this.setSelectedShip(numberOfCells);
    // }
    // else {
    //   this.continueToNextStep();
    // }
  }

  private displayValidationMessage(message: string) {
    this.message = message;
  }


}


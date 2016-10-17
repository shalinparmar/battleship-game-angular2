///<reference path="demo-board-info.ts"/>
import { Injectable } from '@angular/core';
import { Ship } from "./ship";
import { ShipToLocate } from "./ship-to-locate";
import { Player } from "./player";
import { GameService } from "./game.service";
import { DemoBoardInfo } from "./demo-board-info";


@Injectable()
export class DemoService {

  constructor(private gameService: GameService) {
  }


  getDemoShipsForDemoBoard(): DemoBoardInfo {
    let ships: Array <Ship> = new Array<Ship>();
    let cellsOfShips: Array <number> = new Array<number>();

    let shipToAdd: ShipToLocate;

    shipToAdd = new ShipToLocate(false, 4, 11);
    this.addShipToList(shipToAdd, ships, cellsOfShips);

    shipToAdd = new ShipToLocate(true, 4, 16);
    this.addShipToList(shipToAdd, ships, cellsOfShips);

    shipToAdd = new ShipToLocate(false, 5, 63);
    this.addShipToList(shipToAdd, ships, cellsOfShips);

    shipToAdd = new ShipToLocate(false, 3, 41);
    this.addShipToList(shipToAdd, ships, cellsOfShips);

    shipToAdd = new ShipToLocate(true, 3, 28);
    this.addShipToList(shipToAdd, ships, cellsOfShips);

    let result: DemoBoardInfo = new DemoBoardInfo(ships, cellsOfShips);

    return result;
  }

  addShipToList(shipToLocate: ShipToLocate, ships: Array<Ship>, cellsOfShips: Array<number>) {
    let shipToAdd: Ship = new Ship(shipToLocate.locations);

    ships.push(shipToAdd);

    shipToLocate.locations.forEach((id)=>cellsOfShips.push(id));
  }


}

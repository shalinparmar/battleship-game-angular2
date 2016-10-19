///<reference path="demo-board-info.ts"/>
///<reference path="demo-game-info.ts"/>
import { Injectable } from '@angular/core';
import { Ship } from "./ship";
import { ShipToLocate } from "./ship-to-locate";
import { Player } from "./player";
import { GameService } from "./game.service";
import { DemoBoardInfo } from "./demo-board-info";
import { DemoGameInfo } from "./demo-game-info";


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


  getDemoGameInfo(): DemoGameInfo {

    let player1: Player = new Player('שחקן א');
    let player2: Player = new Player('שחקן ב');

    let ships1: Array <Ship> = player1.ships;//  new Array<Ship>();
    let cellsOfShips1: Array <number> = player1.cellsOfShips;//= new Array<number>();

    let ships2: Array <Ship> = player2.ships;// new Array<Ship>();
    let cellsOfShips2: Array <number> = player2.cellsOfShips;//=  new Array<number>();


    let shipToAdd: ShipToLocate;


    //player 1

    shipToAdd = new ShipToLocate(false, 4, 11);
    this.addShipToList(shipToAdd, player1.ships, player1.cellsOfShips);


    shipToAdd = new ShipToLocate(true, 4, 26);
    this.addShipToList(shipToAdd, player1.ships, player1.cellsOfShips);

    shipToAdd = new ShipToLocate(false, 5, 72);
    this.addShipToList(shipToAdd, player1.ships, player1.cellsOfShips);

    shipToAdd = new ShipToLocate(false, 3, 41);
    this.addShipToList(shipToAdd, player1.ships, player1.cellsOfShips);

    shipToAdd = new ShipToLocate(true, 3, 18);
    this.addShipToList(shipToAdd, player1.ships, player1.cellsOfShips);


    //player 2


    shipToAdd = new ShipToLocate(false, 4, 33);
    this.addShipToList(shipToAdd, player2.ships, player2.cellsOfShips);

    shipToAdd = new ShipToLocate(true, 4, 18);
    this.addShipToList(shipToAdd, player2.ships, player2.cellsOfShips);

    shipToAdd = new ShipToLocate(false, 5, 72);
    this.addShipToList(shipToAdd, player2.ships, player2.cellsOfShips);

    shipToAdd = new ShipToLocate(false, 3, 41);
    this.addShipToList(shipToAdd, player2.ships, player2.cellsOfShips);

    shipToAdd = new ShipToLocate(true, 3, 27);
    this.addShipToList(shipToAdd, player2.ships, player2.cellsOfShips);

    let result: DemoGameInfo = new DemoGameInfo(player1, player2);

    return result;

  }


}

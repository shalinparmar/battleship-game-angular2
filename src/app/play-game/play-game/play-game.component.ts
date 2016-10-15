import { Component, OnInit } from '@angular/core';
import { Player } from "../../shared/player";
import { GameService } from "../../shared/game.service";
import { Ship } from "../../shared/ship";
import { ValidationResult } from "../../shared/validation-result";
import { ShipToLocate } from "../../shared/ship-to-locate";

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
})
export class PlayGameComponent implements OnInit {


  player1: Player;
  player2: Player;
  message: string = '';

  constructor(private gameService: GameService) {
  }

  ngOnInit() {


    this.initDemoStatus();

    this.setPlayersInfo();
  }


  // start demo functions

  private initDemoStatus() {

    this.initDemoPlayers();

    this.initDemoShips();

  }

  private initDemoPlayers() {
    this.gameService.registerPlayers('שחקן א', 'שחקן ב')

    this.player1 = this.gameService.player1;
    this.player2 = this.gameService.player2;

    // public ships: Array<Ship> = new Array <Ship>();
  }


  initDemoShips() {

    let shipToAdd: ShipToLocate;

    //player 1

    shipToAdd = new ShipToLocate(false, 4, 11);
    this.addShipToList(shipToAdd, this.player1);

    shipToAdd = new ShipToLocate(true, 4, 26);
    this.addShipToList(shipToAdd, this.player1);

    shipToAdd = new ShipToLocate(false, 5, 72);
    this.addShipToList(shipToAdd, this.player1);

    shipToAdd = new ShipToLocate(false, 3, 41);
    this.addShipToList(shipToAdd, this.player1);

    shipToAdd = new ShipToLocate(true, 3, 18);
    this.addShipToList(shipToAdd, this.player1);

    //player 2


    shipToAdd = new ShipToLocate(false, 4, 33);
    this.addShipToList(shipToAdd, this.player1);

    shipToAdd = new ShipToLocate(true, 4, 18);
    this.addShipToList(shipToAdd, this.player1);

    shipToAdd = new ShipToLocate(false, 5, 72);
    this.addShipToList(shipToAdd, this.player1);

    shipToAdd = new ShipToLocate(false, 3, 41);
    this.addShipToList(shipToAdd, this.player1);

    shipToAdd = new ShipToLocate(true, 3, 27);
    this.addShipToList(shipToAdd, this.player1);

  }

  addShipToList(shipToLocate: ShipToLocate, player: Player) {
    let shipToAdd: Ship = new Ship(shipToLocate.locations);

    player.ships = [...player.ships, shipToAdd];

    //shipToLocate.locations.forEach((id)=>this.cellsOfShips.push(id));
  }


  // end demo functions


  clickCell(id) {

    this.resetMessage();

    console.log('you clicked on ', id);

    // let shipToLocate: ShipToLocate =
    //   new ShipToLocate(this.isVertical, this.currentShipNumberOfCells, id);
    //
    // let validationResult: ValidationResult = this.isValidLocationForShip(shipToLocate);
    //
    // if (validationResult.isValid) {
    //   this.addShipToList(shipToLocate);
    //
    //   this.getNextShip();
    // }
    // else {
    //   this.displayValidationMessage(validationResult.message);
    // }
  }


  setPlayersInfo(): void {

    this.player1 = this.gameService.player1;
    this.player2 = this.gameService.player2;
  }


  private resetMessage() {
    this.message = '';
  }


}

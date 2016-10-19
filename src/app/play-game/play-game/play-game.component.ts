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

  private isGameOver: boolean;
  private isTurnOfFirstPlayer: boolean = true;

  constructor(private gameService: GameService) {
  }

  ngOnInit() {
    this.setPlayersInfo();
  }


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

import { Component, OnInit } from '@angular/core';
import { Player } from "../../shared/player";
import { GameService } from "../../shared/game.service";
import { Ship } from "../../shared/ship";
import { ValidationResult } from "../../shared/validation-result";
import { ShipToLocate } from "../../shared/ship-to-locate";
import { PlayerClickCell } from "../../shared/player-click-cell";

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
})
export class PlayGameComponent implements OnInit {


  player1: Player;
  player2: Player;

  message: string = '';

  currentPlayer: Player;

  private isGameOver: boolean;
  private isTurnOfFirstPlayer: boolean = true;

  constructor(private gameService: GameService) {
  }

  ngOnInit() {
    this.setPlayersInfo();

    this.setFirstPlayer();
  }


  clickCell(playerClickCell: PlayerClickCell) {

    this.resetMessage();

    console.log(`${playerClickCell.player.name} clicked on ${playerClickCell.cellInfo.id}`);

    if (!playerClickCell.cellInfo.isContainShip) {
      this.switchPlayer();
    }


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

    // console.log('player1 ' , this.player1)
  }


  private setFirstPlayer() {
    this.currentPlayer = this.player1;
  }

  private setOtherPlayer() {
    if (this.currentPlayer == this.player1) {
      this.currentPlayer = this.player2;
    }
    else {
      this.currentPlayer = this.player1;
    }
  }

  private resetMessage() {
    this.message = '';
  }

  private switchPlayer() {
    this.isTurnOfFirstPlayer = !this.isTurnOfFirstPlayer;
    this.setOtherPlayer();
  }

}

import { Component, OnInit } from '@angular/core';
import { Player } from "../../shared/player";
import { GameService } from "../../shared/game.service";
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

  ngOnInit(): void {
    this.setPlayersInfo();

    this.setFirstPlayer();
  }

  clickCell(playerClickCell: PlayerClickCell): void {

    this.resetMessage();

    console.log(`${playerClickCell.player.name} clicked on ${playerClickCell.cellInfo.id}`);

    if (!playerClickCell.cellInfo.isContainShip) {
      this.switchPlayer();
    }
  }

  setPlayersInfo(): void {
    this.player1 = this.gameService.player1;
    this.player2 = this.gameService.player2;
  }

  private setFirstPlayer() {
    this.currentPlayer = this.player1;
  }

  private setOtherPlayer(): void {
    if (this.currentPlayer == this.player1) {
      this.currentPlayer = this.player2;
    }
    else {
      this.currentPlayer = this.player1;
    }
  }

  private resetMessage(): void {
    this.message = '';
  }

  private switchPlayer(): void {
    this.isTurnOfFirstPlayer = !this.isTurnOfFirstPlayer;
    this.setOtherPlayer();
  }

  onGameOver(): void {
    this.isGameOver = true;
    this.gameService.resetPlayers()
  }

}

import { Injectable } from '@angular/core';
import { Player } from "./player";

@Injectable()
export class DemoGameInfo {

  public player1: Player;
  public player2: Player;

  constructor(player1: Player, player2: Player) {
    this.player1= player1;
    this.player2= player2;
  }

}


import { Injectable } from '@angular/core';
import { Player } from "./player";

@Injectable()
export class GameService {

  player1: Player;
  player2: Player;

  constructor() {
    this.player1 = new Player();
    this.player2 = new Player();
  }


}

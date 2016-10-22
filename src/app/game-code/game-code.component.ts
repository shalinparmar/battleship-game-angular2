import { Component, OnInit } from '@angular/core';
import { GameService } from "../shared/game.service";

@Component({
  selector: 'app-game-code',
  templateUrl: './game-code.component.html',
  styleUrls: ['./game-code.component.css']
})
export class GameCodeComponent implements OnInit {

  gameCode: number;

  constructor(private  gameService: GameService) {
  }

  ngOnInit() {
    this.gameCode = this.gameService.gameCode;
  }

}

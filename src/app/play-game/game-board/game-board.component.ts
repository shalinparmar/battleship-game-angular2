import { Component, OnInit, Input } from '@angular/core';
import { Player } from "../../shared/player";

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {

  @Input() player: Player;

  cellsOfShipsSimulationEmptyArray: Array<number> = new Array<number>();

  constructor() {
  }

  ngOnInit() {
  }

}

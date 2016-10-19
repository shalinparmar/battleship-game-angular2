import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Input } from "@angular/core/src/metadata/directives";
import { Player } from "../../shared/player";
// import { Player } from "../../shared/player";
// import { Ship } from "../shared/ship";


@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {

  @Input() player: Player;

  // cellsOfShipsSimulationEmptyArray: Array<number> = new Array<number>();


  // @Input() ships: Array<Ship>;
  @Input() isDisableChanges: boolean;
  // @Input() cellsOfShips: Array<number>;
  @Input() isMyTurn: boolean;
  @Input() isGameOver: boolean;



  @Output() private onCellClicked: EventEmitter<number> = new EventEmitter<number>();

  private rowsCollection: Array<number> = [10, 20, 30, 40, 50, 60, 70, 80];
  private cellsCollection: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];

  constructor() {
  }

  ngOnInit() {
  }

  getBoardClass(): any {
    return {
      'my-turn': this.isMyTurn
    };
  }

  clickCell(id: number): void {
    console.log('board - clickCell : ', id);

    if (this.isDisableChanges) {
      return;
    }

    this.onCellClicked.emit(id);
  }


}

/*
 isContainShipSimulation(id: number): boolean {
 return this.cellsOfShipsSimulation.indexOf(id) > -1;
 }*/


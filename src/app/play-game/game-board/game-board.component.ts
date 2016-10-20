import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Input } from "@angular/core/src/metadata/directives";
import { Player } from "../../shared/player";
import { PlayerClickCell } from "../../shared/player-click-cell";
import { CellInfo } from "../../shared/cell-info";
import { Ship } from "../../shared/ship";
// import { Ship } from "../shared/ship";


@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {

  @Input() player: Player;

  @Input() isDisableChanges: boolean;
  @Input() isMyTurn: boolean;
  @Input() isGameOver: boolean;

  @Output() private onCellClicked: EventEmitter<PlayerClickCell > = new EventEmitter<PlayerClickCell>();

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

  clickCell(cellInfo: CellInfo): void {
    console.log('game-board - clickCell : ', cellInfo.id);

    if (this.isDisableChanges) {
      return;
    }

    let playerClickCell: PlayerClickCell = new PlayerClickCell(this.player, cellInfo);
    console.log('playerClickCell ', playerClickCell);
    this.onCellClicked.emit(playerClickCell);

    if (cellInfo.isContainShip) {
      this.updateShipWithExposedCell(cellInfo.id);
    }
  }


  isContainShip(id: number): boolean {
    return this.player.cellsOfShips.indexOf(id) > -1;
  }

  private updateShipWithExposedCell(id: number) {
    let selectedShipArray: Array<Ship> =
      this.player.ships.filter((ship) => ship.locations.indexOf(id) > -1);

    if (selectedShipArray.length == 0) {
      return;
    }

    let selectedShip: Ship =
      selectedShipArray[0];

    let cell: CellInfo =
      (selectedShip.cells.filter((cellInfo) => cellInfo.id == id))[0];

    cell.isExposed = true;

    this.checkIfShipExposed(selectedShip);
  }

  private checkIfShipExposed(selectedShip: Ship) {
    let notExposedCells: Array<CellInfo> =
      selectedShip.cells.filter((cellInfo) => cellInfo.isExposed == false);

    console.log('notExposedCells ', notExposedCells);

    if (notExposedCells.length == 0) {
      //todo:
      alert('finish expose ship');
    }
  }
}

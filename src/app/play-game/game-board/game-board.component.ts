import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Input } from "@angular/core/src/metadata/directives";
import { Player } from "../../shared/player";
import { PlayerClickCell } from "../../shared/player-click-cell";
import { CellInfo } from "../../shared/cell-info";
import { Ship } from "../../shared/ship";
import { BoardService } from "../../shared/board.service";

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
  @Output() private onGameOver: EventEmitter<void> = new EventEmitter<void>();

  //remove
  private rowsCollection: Array<number> = [10, 20, 30, 40, 50, 60, 70, 80];
  private cellsCollection: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];


  private cells: Array<CellInfo>;


  constructor(private boardService: BoardService) {
  }

  ngOnInit() {
    this.initCells();
  }

  getBoardClass(): any {
    return {
      'my-turn': this.isMyTurn
    };
  }


  clickCell(cellInfo: CellInfo): void {
    // console.log('game-board - clickCell : ', cellInfo.id);

    if (this.isDisableChanges) {
      return;
    }

    let playerClickCell: PlayerClickCell = new PlayerClickCell(this.player, cellInfo);

    // console.log('playerClickCell ', playerClickCell);

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

    // console.log('notExposedCells ', notExposedCells);

    if (notExposedCells.length > 0) {
      return;
    }

    selectedShip.isExposed = true;

    this.showExposedShip(selectedShip);

    this.checkIfAllShipExposed();

  }

  private showExposedShip(selectedShip: Ship) {
    //selectedShip.cells.forEach((cell: CellInfo)=>cell.isShipExposed = true);
    selectedShip.cells.forEach((cell: CellInfo)=>this.setBoardCellIsShipExposed(cell.id));

    // console.log('selectedShip.cells ', selectedShip.cells);
  }

  getCellInfo(id) {
    return (this.cells.filter((cell)=>cell.id == id))[0];
  }

  createCellInfo(id) {
    let cellInfo: CellInfo = new CellInfo(id, this.isContainShip(id));

    this.cells.push(cellInfo);
  }

  private initCells() {
    // let rowsCollection: Array<number> = [10, 20, 30, 40, 50, 60, 70, 80];
    // let cellsCollection: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];
    // let id: number;

    let cellsIdList: Array<number> = this.boardService.getBoardCells();

    this.cells = new Array<CellInfo>();

    for (let id of cellsIdList) {
      this.createCellInfo(id);

    }
  }

  private setBoardCellIsShipExposed(id: number) {
    let cell = (this.cells.filter((cell)=>cell.id == id))[0];
    cell.isShipExposed = true;
  }

  private checkIfAllShipExposed() {
    let noExposedShips: Array<Ship> =
      this.player.ships.filter((ship)=>!ship.isExposed);

    console.log('noExposedShips.length ', noExposedShips.length)

    if (noExposedShips.length == 0) {
      this.gameOver();
    }
  }

  private gameOver() {

    this.onGameOver.emit();
  }
}

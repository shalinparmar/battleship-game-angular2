import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CellInfo } from "../../shared/cell-info";
// import { Ship } from "../shared/ship";

@Component({
  selector: 'app-game-cell',
  templateUrl: './game-cell.component.html',
  styleUrls: ['./game-cell.component.css']
})
export class GameCellComponent implements OnInit {


  @Input() cellInfo: CellInfo;
  // @Input() ships: Array<Ship>;
  // @Input() isContainShip: boolean;

  @Input() isDisableChanges: boolean;
  // @Input() isShipExposed: boolean;
  //
  // @Input() isMyTurn: boolean;
  // @Input() isGameOver: boolean;


  @Output() private onCellClicked: EventEmitter<CellInfo> = new EventEmitter<CellInfo>();


  isClickable: boolean;
  isExposed: boolean;


  constructor() {
  }

  ngOnInit() {
  }

  getCellClass(): any {
    // console.log('getCellClass');
    return {
      'exposed-ship': this.cellInfo.isShipExposed
    };
  }

  getCircleClass(): any {
    return {
      'circle': true,
      'circle-pointer': !this.isDisableChanges && !this.isExposed,
      'exposed-no-ship': this.isExposed && !this.cellInfo.isContainShip,
      'exposed-with-ship': this.isExposed && this.cellInfo.isContainShip
    }
  }

  clickCell() {
    // console.log('clickCell');

    // debugger;

    if (this.isDisableChanges) {

      // console.log('click disabled');
      return;
    }

    // let cellInfo: CellInfo = new CellInfo(this.cellInfo.id, this.cellInfo.isContainShip);
    this.onCellClicked.emit(this.cellInfo);

    this.isExposed = true;

  }

}

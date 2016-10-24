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
  @Input() isGameOver: boolean;
  @Input() isDisableChanges: boolean;

  @Output() private onCellClicked: EventEmitter<CellInfo> = new EventEmitter<CellInfo>();


  isExposed: boolean;


  constructor() {
  }

  ngOnInit(): void {
  }

  getCellClass(): any {
    // console.log('getCellClass');
    return {
      'exposed-ship': this.cellInfo.isShipExposed || (this.isGameOver && this.cellInfo.isContainShip)
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

    if (this.isDisableChanges) {
      // console.log('click disabled');
      return;
    }

    this.onCellClicked.emit(this.cellInfo);

    this.isExposed = true;

  }
}

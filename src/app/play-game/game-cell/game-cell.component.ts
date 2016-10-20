import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CellInfo } from "../../shared/cell-info";
// import { Ship } from "../shared/ship";

@Component({
  selector: 'app-game-cell',
  templateUrl: './game-cell.component.html',
  styleUrls: ['./game-cell.component.css']
})
export class GameCellComponent implements OnInit {


  @Input() id: number;
  // @Input() ships: Array<Ship>;
  @Input() isContainShip: boolean;

  @Input() isDisableChanges: boolean;
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
    return {
      // 'contains-ship': this.isContainShip,
    };
  }

  getCircleClass(): any {
    return {
      'circle': true,
      'circle-pointer': !this.isDisableChanges && !this.isExposed,
      'exposed-no-ship': this.isExposed && !this.isContainShip,
      'exposed-with-ship': this.isExposed && this.isContainShip
    }
  }

  clickCell() {
    console.log('clickCell');

    if (this.isDisableChanges) {

      // console.log('click disabled');
      return;
    }

    let cellInfo: CellInfo = new CellInfo(this.id, this.isContainShip);
    this.onCellClicked.emit(cellInfo);

    this.isExposed = true;
  }

}

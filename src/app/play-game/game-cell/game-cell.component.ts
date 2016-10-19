import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Output() private onCellClicked: EventEmitter<number> = new EventEmitter<number>();

  isClickable: boolean;
  isExposed: boolean;


  constructor() {
  }

  ngOnInit() {
  }

  getCellClass(): any {
    return {
      'contains-ship': this.isContainShip
    };
  }

  getCircleClass(): any {
    return {
      'circle': true,
      'circle-pointer': !this.isDisableChanges
    }
  }

  clickCell() {
    console.log('clickCell');

    if (this.isDisableChanges) {
      return;
    }

    this.onCellClicked.emit(this.id);
  }

}

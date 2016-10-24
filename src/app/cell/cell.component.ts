import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Ship } from "../shared/ship";

@Component({
  selector: 'app-cell',
  templateUrl: 'cell.component.html',
  styleUrls: ['cell.component.css'],
})
export class CellComponent implements OnInit {

  @Input() id: number;
  @Input() ships: Array<Ship>;
  @Input() isContainShip: boolean;
  @Input() isContainShipSimulation: boolean;

  @Input() isDisableChanges: boolean;

  @Output() private onCellClicked: EventEmitter<number> = new EventEmitter<number>();
  @Output() private onCellMouseOver: EventEmitter<number> = new EventEmitter<number>();
  @Output() private onCellMouseOut: EventEmitter<number> = new EventEmitter<number>();

  constructor() {

  }

  ngOnInit(): void {

  }

  getCellClass(): any {
    return {
      'contains-ship': this.isContainShip,
      'contains-ship-simulation': this.isContainShipSimulation && !this.isContainShip,
    };
  }

  getCircleClass(): any {
    return {
      'circle': true,
      'circle-pointer': !this.isDisableChanges
    }
  }

  clickCell(): void {
    // console.log('clickCell');

    if (this.isDisableChanges) {
      return;
    }

    this.onCellClicked.emit(this.id);
  }

  mouseOverCell(): void {
    // console.log('mouseOverCell');

    if (this.isDisableChanges) {
      return;
    }

    this.onCellMouseOver.emit(this.id);
  }

  mouseOutCell(): void {
    // console.log('mouseOutCell');

    if (this.isDisableChanges) {
      return;
    }

    this.onCellMouseOut.emit();
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Ship } from "../shared/ship";

@Component({
  selector: 'app-cell',
  template: `

    <td [ngClass]="getCellClass()"  >
      <span [ngClass]="getCircleClass()" (click)="clickCell()">{{id}}</span>      
     </td>
  `,
  styleUrls: ['./cell.component.css'],
})
export class CellComponent implements OnInit {

  @Input() id: number;
  @Input() ships: Array<Ship>;
  @Input() isContainBattleship: boolean;
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
      'contains-ship': this.isContainBattleship
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

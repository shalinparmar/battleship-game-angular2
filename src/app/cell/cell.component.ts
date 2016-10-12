import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { Ship } from '../shared/ship';
import { forEach } from "@angular/router/src/utils/collection";
import { Ship } from "../shared/ship";

@Component({
  selector: 'app-cell',
  template: `

    <td [ngClass]="getCellClass()"  >
      <span class="circle" (click)="clickCell()">{{id}}</span>      
     </td>
  `,
  styleUrls: ['./cell.component.css'],
})
export class CellComponent implements OnInit {

  @Input() id: number;
  @Input() ships: Array<Ship>;
  @Input() isContainBattleship: boolean;
  // @Input() isContainBattleshipString: string;

  @Output() private onCellClicked: EventEmitter<number> = new EventEmitter<number>();

  isClickable: boolean;
  isExposed: boolean;

  constructor() {

  }

  ngOnInit() {
    // this.checkIsContainBattleship();
  }

  getCellClass() {
    return {
      'contains-ship': this.isContainBattleship
    };
  }

  clickCell() {
    console.log('clickCell');

    this.onCellClicked.emit(this.id);
  }

}

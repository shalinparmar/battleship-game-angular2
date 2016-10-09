import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CellComponent } from '../cell/cell.component';
import { Ship } from "../shared/ship";
import { Input } from "@angular/core/src/metadata/directives";

@Component({
  selector: 'app-board',

  styleUrls: ['./board.component.css'],
  templateUrl: './board.component.html'
})
export class BoardComponent implements OnInit {

  @Output() private onCellClicked: EventEmitter<number> = new EventEmitter<number>();

  rowsCollection: Array<number> = [10, 20, 30, 40, 50, 60, 70, 80];
  cellsCollection: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];

  @Input() ships: Array<Ship>;

  constructor() {
  }

  ngOnInit(): void {

  }

  clickCell(id: number) {
    console.log('board - clickCell : ', id);
    this.onCellClicked.emit(id);
  }

}


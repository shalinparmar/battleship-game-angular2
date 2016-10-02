import { Component, OnInit } from '@angular/core';
import { CellComponent } from '../cell/cell.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  rowsCollection: Array<number>;
  cellsCollection: Array<number>;

  // numberOfCellsInRow: number = 8;
  // numberOfRows: number = 8;

  constructor() {
  }

  ngOnInit() {

    this.cellsCollection = Array(8).fill().map((x, i)=>i + 1); // [1,2,3,4..8]
    this.rowsCollection = Array(8).fill().map((x, i)=> (i + 1) * 10); // [10,20,30,40..80]

  }

}

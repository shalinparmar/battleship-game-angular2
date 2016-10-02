import { Component, OnInit } from '@angular/core';
import { CellComponent } from '../cell/cell.component';
import { Ship } from "../shared/ship";
import { Input } from "@angular/core/src/metadata/directives";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  rowsCollection: Array<number> = [10, 20, 30, 40, 50, 60, 70, 80];
  cellsCollection: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];

  @Input() ships: Array<Ship>;
  // numberOfCellsInRow: number = 8;
  // numberOfRows: number = 8;

  constructor() {
  }

  ngOnInit() {

    /*
     this.cellsCollection = Array(8).fill().map((x, i)=>i + 1); // [1,2,3,4..8]
     this.rowsCollection = Array(8).fill().map((x, i)=> (i + 1) * 10); // [10,20,30,40..80]
     */

  }

}

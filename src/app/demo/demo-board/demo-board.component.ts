import { Component, OnInit } from '@angular/core';
import { CellComponent } from '../../cell/cell.component';
import { Ship } from "../../shared/ship";
import { Input } from "@angular/core/src/metadata/directives";


@Component({
  selector: 'app-demo-board',
  templateUrl: './demo-board.component.html',
  styleUrls: ['./demo-board.component.css']
})
export class DemoBoardComponent implements OnInit {

  rowsCollection: Array<number> = [10, 20, 30, 40, 50, 60, 70, 80];
  cellsCollection: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];

  @Input() ships: Array<Ship>;

  constructor() {
  }

  ngOnInit(): void {

  }

}
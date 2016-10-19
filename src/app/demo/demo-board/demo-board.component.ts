import { Component, OnInit } from '@angular/core';
import { Input, Output } from "@angular/core/src/metadata/directives";
import { Ship } from "../../shared/ship";


@Component({
  selector: 'app-demo-board',
  templateUrl: './demo-board.component.html',
  styleUrls: ['./demo-board.component.css']
})
export class DemoBoardComponent implements OnInit {

  @Input() ships: Array<Ship>;
  @Input() cellsOfShips: Array<number>;

  private rowsCollection: Array<number> = [10, 20, 30, 40, 50, 60, 70, 80];
  private cellsCollection: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];

  constructor() {
  }

  ngOnInit(): void {

  }

  isContainShip(id: number): boolean {
    return this.cellsOfShips.indexOf(id) > -1;
  }

}

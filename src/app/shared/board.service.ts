import { Injectable } from '@angular/core';

@Injectable()
export class BoardService {

  constructor() {
  }

  getBoardCells(): Array<number> {
    let rowsCollection: Array<number> = [10, 20, 30, 40, 50, 60, 70, 80];
    let cellsCollection: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];
    let id: number;

    let cells = new Array<number>();

    for (let row of rowsCollection) {
      for (let cell of cellsCollection) {
        id = row + cell;
        cells.push(id);
      }
    }

    return cells;
  }

}

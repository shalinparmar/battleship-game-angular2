import { Ship } from "./ship";
export class DemoBoardInfo {

  ships: Array<Ship>;
  cellsOfShips: Array<number>;

  constructor(ships: Array<Ship>, cellsOfShips: Array<number>) {
    this.ships = ships;
    this.cellsOfShips = cellsOfShips;
  }

}

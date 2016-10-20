///<reference path="cell-info.ts"/>
// import { ShipBase } from "./ship-base";

import { CellInfo } from "./cell-info";
export class Ship /*extends ShipBase */ {

  isExposed: boolean = false;
  locations: Array<number>;
  cells: Array<CellInfo>;

  constructor(locations: Array<number> = new Array<number>()) {
    // super(locations);

    this.locations = locations;
    this.cells = this.locations.map((id)=>new CellInfo(id, true));
  }

}

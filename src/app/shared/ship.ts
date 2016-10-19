import { ShipBase } from "./ship-base";

export class Ship extends ShipBase {

  isExposed: boolean = false;

  constructor(locations: Array<number>) {
    super(locations);
  }

}

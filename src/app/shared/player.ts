import { Ship } from "./ship";
export class Player {

  public name: string;
  public ships: Array<Ship> = new Array <Ship>();
  public cellsOfShips: Array<number> = new Array<number>();

  constructor(name: string = "") {
    this.name = name;
  }


}

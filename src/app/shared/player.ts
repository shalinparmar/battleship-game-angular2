import { Ship } from "./ship";
export class Player {

  public name: string;
  public ships: Array<Ship> = new Array <Ship>();

  constructor(name: string = "") {
    this.name = name;
  }


}

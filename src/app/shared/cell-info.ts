export class CellInfo {
  id: number;
  public isExposed: boolean = false;
  isContainShip: boolean;

  constructor(id: number, isContainShip: boolean) {
    this.id = id;
    this.isContainShip = isContainShip;
  }

}

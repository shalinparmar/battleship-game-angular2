export class CellInfo {
  id: number;
  // isExposed: boolean;
  isContainShip: boolean;

  constructor(id: number, isContainShip: boolean) {
    this.id = id;
    this.isContainShip = isContainShip;
  }

}

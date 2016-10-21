export class CellInfo {
  id: number;
  isExposed: boolean = false;
  isShipExposed: boolean = false;
  isContainShip: boolean;

  constructor(id: number, isContainShip: boolean) {
    this.id = id;
    this.isContainShip = isContainShip;
  }
}

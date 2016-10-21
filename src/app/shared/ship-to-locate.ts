// import { ShipBase } from "./ship-base";

export class ShipToLocate /*extends ShipBase */ {

  public isVertical: boolean;
  public size: number;
  public firstCell: number;
  public locations: Array<number> = new Array<number>();

  constructor(isVertical: boolean,
              size: number,
              firstCell: number) {
    // super();

    this.isVertical = isVertical;
    this.size = size;
    this.firstCell = firstCell;


    this.setShipLocations();

    // console.log('locations ', this.locations);

  }


  private setShipLocations() {
    let gap: number = this.getCellsGap();

    let cellValue: number = this.firstCell;

    for (let i = 0; i < this.size; i++) {
      this.locations.push(cellValue);
      cellValue += gap;
    }
  }

  private getCellsGap() {
    if (this.isVertical) {
      return 10;
    }

    return 1;
  }
}

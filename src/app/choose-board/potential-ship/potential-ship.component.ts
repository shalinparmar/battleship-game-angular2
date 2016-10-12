import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core/src/metadata/directives";

@Component({
  selector: 'app-potential-ship',
  templateUrl: './potential-ship.component.html',
  styleUrls: ['./potential-ship.component.css']
})
export class PotentialShipComponent implements OnInit {

  // @Input() isSelectedShip: boolean;
  @Input() size: number;

  @Input() isVertical: boolean;

  cellsCollection: Array<number>;

  constructor() {
  }

  ngOnInit() {
    //temp !
    // this.isSelectedShip = true;

    this.setCellsCollection();
  }

  setCellsCollection() {
    this.cellsCollection = this.getArrayBySize();
  }

  getArrayBySize(): Array<number> {
    return Array.from(Array(this.size).keys());
  }


}

import { Component, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { Input } from "@angular/core/src/metadata/directives";

@Component({
  selector: 'app-potential-ship',
  templateUrl: './potential-ship.component.html',
  styleUrls: ['./potential-ship.component.css']
})
export class PotentialShipComponent implements OnInit, OnChanges {

  @Input() size: number;
  @Input() isVertical: boolean;

  @Input() detectChangeInParent: any;

  cellsCollection: Array<number>;

  constructor() {
  }

  ngOnInit(): void {
    this.setCellsCollection();
  }

  setCellsCollection(): void {
    this.cellsCollection = this.getArrayBySize();
  }

  getArrayBySize(): Array<number> {
    return Array.from(Array(this.size).keys());
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}): void {
      this.setCellsCollection();
  }

}

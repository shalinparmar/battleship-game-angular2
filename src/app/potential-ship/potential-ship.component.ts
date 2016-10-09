import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core/src/metadata/directives";

@Component({
  selector: 'app-potential-ship',
  templateUrl: './potential-ship.component.html',
  styleUrls: ['./potential-ship.component.css']
})
export class PotentialShipComponent implements OnInit {

  @Input() isSelectedShip: boolean;
  @Input() size: number;

  isVertival: boolean;

  cellsCollection: Array<number> = [1, 2, 3];

  constructor() {
  }

  ngOnInit() {
    //temp !
    this.isSelectedShip=true;
  }

  switchDirection(){
    this.isVertival=!this.isVertival;
  }
}

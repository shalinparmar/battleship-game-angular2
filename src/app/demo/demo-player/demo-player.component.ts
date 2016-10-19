import { Component, OnInit } from '@angular/core';
import { Ship } from "../../shared/ship";
import { ShipToLocate } from "../../shared/ship-to-locate";
import { DemoService } from "../../shared/demo.service";
import { DemoBoardInfo } from "../../shared/demo-board-info";

@Component({
  selector: 'app-demo-player',
  templateUrl: './demo-player.component.html',
  styleUrls: ['./demo-player.component.css']
})
export class DemoPlayerComponent implements OnInit {

  cellsOfShips: Array<number> = new Array<number>();
  ships: Array<Ship>;

  constructor(private demoService: DemoService) {
  }

  ngOnInit(): void {
    this.initDemoShips();
  }

  initDemoShips() {
    let demoBoardInfo: DemoBoardInfo = this.demoService.getDemoShipsForDemoBoard();
    this.cellsOfShips = demoBoardInfo.cellsOfShips;
    this.ships = demoBoardInfo.ships;
  }
}


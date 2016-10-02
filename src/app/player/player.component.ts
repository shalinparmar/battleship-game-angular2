import { Component, OnInit } from '@angular/core';
import { Ship } from "../shared/ship";
import { BoardComponent} from "../board/board.component";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {


  ships: Array<Ship> = new Array<Ship>();

  constructor() {
  }

  ngOnInit() {

    this.ships.push(new Ship([11, 12, 13]));
    this.ships.push(new Ship([24, 34, 44, 54]));

  }

}

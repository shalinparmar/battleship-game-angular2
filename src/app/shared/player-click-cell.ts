import { Player } from "./player";
import { CellInfo } from "./cell-info";

export class PlayerClickCell {
  player: Player;
  cellInfo: CellInfo;


  constructor(player: Player,
              cellInfo: CellInfo) {
    this.player = player;
    this.cellInfo = cellInfo;

  }
}

import { Component, OnInit } from '@angular/core';
import { Player } from "../shared/player";
import { GameService } from "../shared/game.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Ship } from "../shared/ship";

@Component({
  selector: 'app-choose-locations',
  templateUrl: './choose-locations.component.html',
  styleUrls: ['./choose-locations.component.css']
})
export class ChooseLocationsComponent implements OnInit {

  player: Player;
  isFirstPlayer: boolean;
  private subscriber: any;


  ships: Array<Ship> = new Array<Ship>();

  constructor(private gameService: GameService,
              private router: Router,
              private route: ActivatedRoute) {

  }


  ngOnInit(): void {
    this.subscriber = this.route.params.subscribe(
      params => {
        let id =   +params['id'];

        this.isFirstPlayer = (id != 2);

      }
    );

    this.setPlayerInfo();


    this.ships.push(new Ship([11, 12, 13,14]));
    this.ships.push(new Ship([24, 34, 44, 54]));
    this.ships.push(new Ship([63, 64, 65, 66, 67]));


  }

  setPlayerInfo(): void {
    if (this.isFirstPlayer) {
      this.player = this.gameService.player1;
    }
    else {
      this.player = this.gameService.player2;
    }
  }

  setShipLocation() {
    // this.gameService.registerPlayers(model.name1, model.name2)

  }

  finishChoose(): void {
//if first then
    this.router.navigate(['choose-location/2']);
    // else
    // this.router.navigate(['start-game']);

  }


}






export class DemoPlayerComponent implements OnInit {

  ships: Array<Ship> = new Array<Ship>();

  constructor() {
  }


  ngOnInit(): void {

  }

}

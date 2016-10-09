import { Component, OnInit } from '@angular/core';
import { Player } from "../shared/player";
import { GameService } from "../shared/game.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-choose-locations',
  templateUrl: './choose-locations.component.html',
  styleUrls: ['./choose-locations.component.css']
})
export class ChooseLocationsComponent implements OnInit {

  player: Player;
  isFirstPlayer: boolean;
  private subscriber: any;

  constructor(private gameService: GameService,
              private router: Router,
              private route: ActivatedRoute) {

  }


  ngOnInit(): void {
    this.subscriber = this.route.params.subscribe(
      params => {
        let id = +params['id'];

        this.isFirstPlayer = (id != 2);

      }
    );

    this.setPlayerInfo();
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

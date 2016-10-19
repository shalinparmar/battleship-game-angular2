import { Component, OnInit } from '@angular/core';
import { Player } from "../../shared/player";
import { GameService } from "../../shared/game.service";
import { Ship } from "../../shared/ship";
import { ValidationResult } from "../../shared/validation-result";
import { ShipToLocate } from "../../shared/ship-to-locate";
import { DemoGameInfo } from "../../shared/demo-game-info";
import { DemoService } from "../../shared/demo.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-demo-game',
  templateUrl: './demo-game.component.html',
  styleUrls: ['./demo-game.component.css']
})
export class DemoGameComponent implements OnInit {


  player1: Player;
  player2: Player;

  constructor(private gameService: GameService,
              private demoService: DemoService,
              private router: Router) {
  }


  ngOnInit() {
    this.initDemoPlayers();

    this.setPlayersInfo();

    this.initDemoStatus();
  }

  private initDemoStatus() {
    this.initDemoShips();
  }

  setPlayersInfo(): void {
    this.player1 = this.gameService.player1;
    this.player2 = this.gameService.player2;
  }

  // start demo functions

  private initDemoPlayers() {
    this.gameService.registerPlayers('שחקן א', 'שחקן ב')
  }

  initDemoShips() {

    let demoGameInfo: DemoGameInfo = this.demoService.getDemoGameInfo();

    this.gameService.player1 = demoGameInfo.player1;
    this.gameService.player2 = demoGameInfo.player2;

    console.log('check player info');
    console.log('ships ', this.gameService.player1.ships);
    console.log('cellsOfShips ', this.gameService.player1.cellsOfShips);

    this.router.navigate(['play-game']);
  }

}

import { Component, OnInit } from '@angular/core';
import { GameService } from "../shared/game.service";

import { Users } from "../shared/users.interface";
import { Router } from "@angular/router";

@Component({
  selector: 'app-set-players',
  templateUrl: './set-players.component.html',
  styleUrls: ['./set-players.component.css']
})
export class SetPlayersComponent implements OnInit {

  public users: Users;

  constructor(private gameService: GameService,
              private router: Router) {
  }

  ngOnInit(): void {

    this.users = {
      name1: '',
      name2: ''
    };

    this.resetGame();
  }

  registerUsers(model: Users, isValid: boolean): void {
    this.gameService.registerPlayers(model.name1, model.name2);

    this.router.navigate(['choose-location/1']);
  }

  private resetGame() :void{
    this.gameService.resetPlayers();

    this.gameService.setGameCode();
  }

/*
  onBack():void{
    console.log('back !!!');
  }
*/

}

import { Component, OnInit } from '@angular/core';
import { GameService } from "../shared/game.service";
import { Player } from "../shared/player";

@Component({
  selector: 'app-start',
  template: `
    <h2>
      בחירת המשתתפים
    </h2>
    
    
    <label for="name1">משתתף 1</label>

    <input type="text" id="name1" class="form-control"
       required minlength="2" maxlength="20"
       name="name1" [(ngModel)]="player1.name"
       #name1="ngModel" >
    
    
    
    <label for="name2">משתתף 2</label>

    <input type="text" id="name2" class="form-control"
       required minlength="2" maxlength="20"
       name="name2" [(ngModel)]="player2.name"
       #name2="ngModel" >
    
    <hr>
    
  `,
  styles: [`
h2{
  margin-top: 50px;
}
`]
})
export class StartComponent implements OnInit {

  player1: Player;
  player2: Player;

  constructor(private gameService: GameService) {
  }

  ngOnInit() {
    this.player1 = new Player();
    this.player2 = new Player();
  }

}

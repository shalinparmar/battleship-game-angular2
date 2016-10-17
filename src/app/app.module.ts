import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CellComponent } from './cell/cell.component';
import { BoardComponent } from './board/board.component';

import { routing, appRoutingProviders } from './app.routing';
import { PageNotFoundComponent } from "./page-not-found.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { GameService } from "./shared/game.service";
import { DemoService } from "./shared/demo.service";
import { NotEqualValidator } from "./shared/not-equal-validator.directive";
import { ChooseLocationsComponent } from './choose-board/choose-locations/choose-locations.component';
import { DemoBoardComponent } from './demo/demo-board/demo-board.component';
import { PotentialShipComponent } from './choose-board/potential-ship/potential-ship.component';
import { PotentialCellComponent } from './choose-board/potential-cell/potential-cell.component';
import { SetPlayersComponent } from './set-players/set-players.component';
import { DemoPlayerComponent } from './demo/demo-player/demo-player.component';
import { PlayGameComponent } from './play-game/play-game/play-game.component';
import { StartGameComponent } from './play-game/start-game/start-game.component';
import { GameBoardComponent } from './play-game/game-board/game-board.component';

@NgModule({
  declarations: [
    AppComponent,
    CellComponent,
    BoardComponent,
    PageNotFoundComponent,
    DashboardComponent,
    NotEqualValidator,
    ChooseLocationsComponent,
    DemoBoardComponent,
    PotentialShipComponent,
    PotentialCellComponent,
    SetPlayersComponent,
    DemoPlayerComponent,
    PlayGameComponent,
    StartGameComponent,
    GameBoardComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    appRoutingProviders,
    GameService,
    DemoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

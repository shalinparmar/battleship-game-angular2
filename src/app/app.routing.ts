///<reference path="play-game/start-game/start-game.component.ts"/>
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

import { PageNotFoundComponent } from './page-not-found.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DemoPlayerComponent } from "./demo/demo-player/demo-player.component";

import { ChooseLocationsComponent } from "./choose-board/choose-locations/choose-locations.component";
import { DemoBoardComponent } from "./demo/demo-board/demo-board.component";
import { SetPlayersComponent } from "./set-players/set-players.component";
import { StartGameComponent } from "./play-game/start-game/start-game.component";
import { PlayGameComponent } from "./play-game/play-game/play-game.component";
import { DemoGameComponent } from "./demo/demo-game/demo-game.component";
import { TestComponent } from "./tests/test/test.component";


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },

  { path: 'demo-board', component: DemoBoardComponent },
  { path: 'set-players', component: SetPlayersComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'choose-location/:id', component: ChooseLocationsComponent },
  { path: 'demo-player', component: DemoPlayerComponent },
  { path: 'start-game', component: StartGameComponent },
  { path: 'play-game', component: PlayGameComponent },
  { path: 'play-game-demo', component: DemoGameComponent },
  { path: 'test', component: TestComponent},


  { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

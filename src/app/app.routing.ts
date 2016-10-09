import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

import { PageNotFoundComponent } from './page-not-found.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { BoardComponent } from "./board/board.component";
import { DemoPlayerComponent } from "./demo/demo-player/demo-player.component";
// import { StartComponent } from "./--not-in-use-files/start/start.component";
import { ChooseLocationsComponent } from "./choose-board/choose-locations/choose-locations.component";
import { DemoBoardComponent } from "./demo/demo-board/demo-board.component";
import { SetPlayersComponent } from "./set-players/set-players.component";


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },

  // { path: 'dashboard', component: DashboardComponent },
  { path: 'demo-board', component: DemoBoardComponent },
  { path: 'set-players', component: SetPlayersComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'choose-location/:id', component: ChooseLocationsComponent },
  { path: 'demo-player', component: DemoPlayerComponent },


  { path: '**', component: PageNotFoundComponent }
];


export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

